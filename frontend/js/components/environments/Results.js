'use strict';

import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import BestMatch from './../ecosystems/BestMatch';
import OtherMatch from './../ecosystems/OtherMatch';
import LoadingIndicator from './../organisms/LoadingIndicator';
import ElectionReminderPrompt from './../ecosystems/ElectionReminderPrompt';
import MethodologyPrompt from './../ecosystems/MethodologyPrompt';

import {
    fetchSurveyResults
} from './../../redux/actions/result-actions';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyResults(this.props.params.passPhrase));
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
        );
    }
}

Results.propTypes = {
    params: PropTypes.object,
    dispatch: PropTypes.func,
    result: PropTypes.object
};

export default connect(
  state => ({
      ui: state.ui,
      login: state.login,
      result: state.result
  })
)(Results);
