'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';

import {
  fetchSurveyQuestions
} from './../../redux/actions/survey-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyQuestions());
    }

    render() {
        return (
            <article>
                {this.props.survey.questions.map((question, index) => {
                    return (
                        <SurveyCard
                            text={question.text}
                            key={index} />
                    );
                })}
            </article>
        );
    }
}

Survey.propTypes = {
    dispatch: PropTypes.func,
    survey: PropTypes.object
};

module.exports = connect(
    state => ({
        ui: state.ui,
        login: state.login,
        survey: state.survey
    })
)(Survey);
