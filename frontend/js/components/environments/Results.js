'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import BestMatch from './../ecosystems/BestMatch';
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

    sortMatches(matchA, matchB) {
        if (matchA.matchRate < matchB.matchRate) {
            return 1;
        }
        else if (matchB.matchRate < matchA.MatchRate) {
            return -1;
        }
        return 0;
    }

    render () {

        const matches = this.props.result.matches;

        const bestRate = Math.max.apply(Math, matches.map((o) => {
            return o.matchRate;
        }));

        const bestMatch = matches.filter((o) => {
            return o.matchRate == bestRate;
        });

        const otherMatches = matches
            .filter((o) => {
                return o.matchRate != bestRate;
            })
            .sort(this.sortMatches);

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
                        party="Party Affiliation"
                        office={m.office}
                        matchRate={Math.round(m.matchRate)} />);
                })}

                { otherMatches.map((m) => {
                    return (<BestMatch
                        key={m.name}
                        name={m.name}
                        party="Party Affiliation"
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
