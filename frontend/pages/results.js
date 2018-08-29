import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { gotoRoute } from './../store/actions/router-actions';
import { initStore } from './../store';

import Layout from './../components/Layout';
import BestMatch from './../components/templates/BestMatch';
import LoadingIndicator from './../components/organisms/LoadingIndicator';
import ElectionReminderPrompt from './../components/templates/ElectionReminderPrompt';
import MethodologyPrompt from './../components/templates/MethodologyPrompt';

import {
    fetchSurveyResults
} from './../store/actions/result-actions';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyResults(this.props.url.query.passPhrase));
    }

    render () {

        const matches = this.props.result.matches;

        const bestRate = Math.max.apply(Math, matches.map((o) => {
            return o.matchRate;
        }));

        const bestMatch = matches.filter((o) => {
            return o.matchRate == bestRate;
        });

        const otherMatches = matches.filter((o) => {
            return o.matchRate != bestRate;
        });

        return (
            <Layout>
                <article className="container">

                    {
                        !bestMatch.length &&
                        !otherMatches.length &&
                        <LoadingIndicator message="Loading Matches" />
                    }

                    { bestMatch.map((m) => {
                        return (<BestMatch
                                key={m.name}
                                matchText={bestMatch.length > 1 ?
                                "It's a duplicate!" :
                                "It's a match!"}
                                name={m.name}
                                office={m.office}
                                matchRate={Math.round(m.matchRate)} />);
                    })}

                    { otherMatches.map((m) => {
                        return (<BestMatch
                                key={m.name}
                                name={m.name}
                                office={m.office}
                                matchRate={Math.round(m.matchRate)} />);
                    })}

                    <ElectionReminderPrompt />
                    <MethodologyPrompt />
                </article>
            </Layout>
        );
    }
}

Results.propTypes = {
    params: PropTypes.object,
    dispatch: PropTypes.func,
    result: PropTypes.object
};

export default withRedux(
    initStore,
    state => ({
        ui: state.ui,
        login: state.login,
        result: state.result
    })
)(Results);
