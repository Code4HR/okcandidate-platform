'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import CandidateMatch from './../ecosystems/CandidateMatch';
import LoadingIndicator from './../organisms/LoadingIndicator';
import ElectionReminderPrompt from './../ecosystems/ElectionReminderPrompt';
import MethodologyModal from './../ecosystems/MethodologyModal';
import MethodologyPrompt from './../ecosystems/MethodologyPrompt';
import SocialMediaIcons from './../organisms/SocialMediaIcons';
import ElectionReminderModal from './../ecosystems/ElectionReminderModal';
import Alert from './../organisms/Alert';

import {
    fetchSurveyResults,
    toggleModalState,
    hideElectionReminderPrompt,
    toggleMethodologyModalVisibility
} from './../../redux/actions/result-actions';

import {
    fetchSurveyResult
} from './../../redux/actions/survey-actions';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyResults(this.props.params.passPhrase));
        this.props.dispatch(fetchSurveyResult());
    }

    showElectionReminderSignup() {
        this.props.dispatch(toggleModalState());
    }

    hideElectionReminderPrompt() {
        this.props.dispatch(hideElectionReminderPrompt());
    }

    toggleMethodologyModal() {
        this.props.dispatch(toggleMethodologyModalVisibility());
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

                <ElectionReminderModal
                    SurveyResultId={this.props.result.SurveyResultId}
                    email={this.props.result.email}
                    phone={this.props.result.phone}
                    newsletter={this.props.result.newsletter}
                    active={this.props.result.showElectionReminderModal}
                    dispatch={this.props.dispatch} />

                <MethodologyModal
                    onClick={this.toggleMethodologyModal.bind(this)}
                    active={this.props.result.showMethodologyModal} />

                <SocialMediaIcons primary/>

                {
                    !bestMatch.length &&
                    !otherMatches.length &&
                    <LoadingIndicator message="Loading Matches" />
                }

                { bestMatch.map((m) => {
                    return (<CandidateMatch
                        key={m.name}
                        name={m.name}
                        party={m.party}
                        office={m.office}
                        matchRate={Math.round(m.matchRate)} />);
                })}

                { otherMatches.map((m) => {
                    return (<CandidateMatch
                        key={m.name}
                        name={m.name}
                        party={m.party}
                        office={m.office}
                        matchRate={Math.round(m.matchRate)} />);
                })}

                {
                    this.props.result.showElectionReminderPrompt &&
                    <ElectionReminderPrompt
                        onClick={this.showElectionReminderSignup.bind(this)}
                        onClose={this.hideElectionReminderPrompt.bind(this)} />
                }

                {
                    this.props.result.electionReminderCreated &&
                    <Alert
                        level="success"
                        message="Thanks for signing up for a reminder!  We'll contact you on election day." />
                }

                <MethodologyPrompt
                    onClick={this.toggleMethodologyModal.bind(this)} />
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
