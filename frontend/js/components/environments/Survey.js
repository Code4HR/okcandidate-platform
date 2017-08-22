'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';
import LoadingIndicator from './../organisms/LoadingIndicator';

import {
    gotoNextQuestion,
    gotoPrevQuestion,
    fetchSurveyQuestions,
    createSurveyResultAnswer,
    updateSurveyResultAnswer,
    fetchSurveyResult,
    createSurveyResult,
    setAnswerHelpText,
    setSentimentHelpText
} from './../../redux/actions/survey-actions';

import {
    gotoRoute
} from './../../redux/actions/router-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * On mount, retrieve any stored SurveyResult for this user, then fetch survey questions.
     */

    componentWillMount() {
        const SurveyId = this.props.params.id;
        const fetchQuestions = this.props.dispatch.bind(
            this,
            fetchSurveyQuestions(SurveyId)
        );

        if (this.props.location.query.newSurvey) {
            return this.props.dispatch(createSurveyResult(SurveyId, fetchQuestions));
        }

        this.props.dispatch(
            fetchSurveyResult((error, response) => {
                if (error) { return; }
                if (!response.id) {
                    return this.props.dispatch(createSurveyResult(SurveyId, fetchQuestions));
                }
                return fetchQuestions();
            })
        );
    }

    /**
     * Returns objects describing the question and the voter's response to the question.
     */

    getQuestionAndResponse() {
        const index = this.props.survey.questionIndex;
        const question = this.props.survey.questions[index];
        const response = question && this.props.survey.answers[question.id];
        return [question, response];
    }

    /**
     * Validates the voter's responses according to the format of the survey. If valid,
     * fires the callback.
     */

    validateResponse(response, callback) {
        let valid = true;
        // If this survey is asking for the voter's sentiment, check that it was provided.
        if (!!this.props.survey.sentiment !== !!response.sentiment) {
            valid = false;
            this.props.dispatch(setSentimentHelpText('How strongly do you feel about this issue?'));
        }

        if (!!this.props.survey.multipleChoice !== !!response.AnswerId) {
            valid = false;
            this.props.dispatch(setAnswerHelpText('What position is closest to yours?'));
        }
        return valid && callback();
    }

    /**
     * Skips to the results page.
     */

    gotoResults() {
        return gotoRoute(`/results/${this.props.survey.publicPassPhrase}`);
    }

    /**
     * Validates the voter's selections, and then makes the appropriate network calls
     * to create or update the response records.
     */

    submit(callback) {
        const [question, response] = this.getQuestionAndResponse();
        const SurveyResultId = this.props.survey.SurveyResultId;

        // If no input was provided, don't create any records.
        if (!response) {
            return callback();
        }

        this.validateResponse(response, () => {
            // If answer doesn't have an ID, this is a new record.
            if (!response.id) {
                return this.props.dispatch(
                    createSurveyResultAnswer(
                        question,
                        response,
                        SurveyResultId,
                        callback
                    )
                );
            }

            // Check to see if the user modified their answer before resubmitting.
            else if (!response.pristine) {
                return this.props.dispatch(
                    updateSurveyResultAnswer(
                        response,
                        callback
                    )
                );
            }

            // Otherwise, continue without making changes.
            return callback();
        });
    }

    /**
     * Submits the voter's responses as necessary, then returns to the previous page.
     */

    gotoPrevQuestion() {
        this.submit(() => {
            if (this.props.survey.questionIndex === 0) {
                return gotoRoute(`/survey/${this.props.params.id}`);
            }
            return this.props.dispatch(gotoPrevQuestion());
        });
    }
    countAnsweredQuestions() {
        const keys = Object.keys(this.props.survey.answers);
        return keys.reduce((memo, key) => {
            const question = this.props.survey.answers[key];
            // If the question doesn't have an ID, it wasn't really answered.
            if (question.id) {
                memo = memo + 1;
            }
            return memo;
        }, 0);
    }

    /**
     * Submits the voter's responses as necessaray, then goes to the next question/page.
     */

    gotoNextQuestion() {
        this.submit(() => {
            if (this.props.survey.questionIndex >= this.props.survey.questions.length - 1) {
                return gotoRoute(`/results/${this.props.survey.publicPassPhrase}`);
            }
            return this.props.dispatch(gotoNextQuestion());
        });
    }

    render() {
        const [question, response] = this.getQuestionAndResponse();

        return (
            <div className="container">
                <div className="twelve columns">
                    <article className="survey">
                        {
                            !question &&
                            <LoadingIndicator message="Loading Questions" />
                        }

                        { question &&
                        <SurveyCard
                            sentimentHelp={this.props.survey.sentimentHelp}
                            answerHelp={this.props.survey.answerHelp}
                            answerCount={this.countAnsweredQuestions.call(this)}
                            questionCount={this.props.survey.questions.length}
                            dispatch={this.props.dispatch}
                            text={question.text}
                            options={question.Answers}
                            id={question.id}
                            multipleChoice={this.props.survey.multipleChoice}
                            hasSentiment={this.props.survey.sentiment}
                            onNextClick={this.gotoNextQuestion.bind(this)}
                            onBackClick={this.gotoPrevQuestion.bind(this)}
                            answerId={response && response.AnswerId}
                            sentiment={response && response.sentiment}
                            onResultsClick={this.gotoResults.bind(this)} />
                        }
                    </article>
                </div>
            </div>
        );
    }
}

Survey.propTypes = {
    dispatch: PropTypes.func,
    survey: PropTypes.object,
    params: PropTypes.object,
    location: PropTypes.object
};

module.exports = connect(
    state => ({
        ui: state.ui,
        login: state.login,
        survey: state.survey
    })
)(Survey);
