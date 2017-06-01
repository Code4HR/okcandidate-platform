'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';

import {
  gotoNextQuestion,
  gotoPrevQuestion,
  fetchSurveyQuestions
} from './../../redux/actions/survey-actions';

import {
    gotoRoute
} from './../../redux/actions/router-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyQuestions());
    }

    gotoPrevQuestion() {
        if (this.props.survey.questionIndex === 0) {
            return gotoRoute('/category');
        }
        return this.props.dispatch(gotoPrevQuestion());
    }

    gotoNextQuestion() {
        if (this.props.survey.questionIndex >= this.props.survey.questions.length - 1) {
            return gotoRoute('/results');
        }
        return this.props.dispatch(gotoNextQuestion());
    }

    render() {
        const index = this.props.survey.questionIndex;
        const question = this.props.survey.questions[index];

        return (
            <div className="twelve columns">
                <article className="survey">
                    { question &&
                      <SurveyCard
                          dispatch={this.props.dispatch}
                          text={question.text}
                          id={question.id}
                          onNextClick={this.gotoNextQuestion.bind(this)}
                          onBackClick={this.gotoPrevQuestion.bind(this)}
                          agreement={question.agreement} />
                    }
                </article>
            </div>
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
