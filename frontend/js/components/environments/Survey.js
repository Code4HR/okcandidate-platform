'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';
import LoadingIndicator from './../organisms/LoadingIndicator';

import {
    gotoNextQuestion,
    gotoPrevQuestion,
    fetchSurveyQuestions,
    createSurveyResultAnswer,
    updateSurveyResultAnswer,
    fetchSurveyResult
} from './../../redux/actions/survey-actions';

import {
    gotoRoute
} from './../../redux/actions/router-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyResult(this.props.routeParams.id, (error) => {
            if (!error) {
                this.props.dispatch(fetchSurveyQuestions(this.props.routeParams.id));
            }
        }));
    }

    gotoPrevQuestion() {
        if (this.props.survey.questionIndex === 0) {
            return gotoRoute(`/survey/${this.props.routeParams.id}`);
        }
        return this.props.dispatch(gotoPrevQuestion());
    }

    gotoNextQuestion() {
        const [
            question,
            answer,
            sentiment
        ] = this.getQuestionAndResponses();

        const callback = () => {
            if (this.props.survey.questionIndex >= this.props.survey.questions.length - 1) {
                return gotoRoute(`/results/${this.props.survey.publicPassPhrase}`);
            }
            return this.props.dispatch(gotoNextQuestion());
        };

        // If answer doesn't have an ID, this is a new record.
        if (!answer.id) {
            return this.props.dispatch(
                createSurveyResultAnswer(
                    question.id,
                    this.props.survey.SurveyResultId,
                    answer.AnswerId,
                    sentiment,
                    callback
                )
            );
        }
        return this.props.dispatch(
            updateSurveyResultAnswer(
                answer.id,
                answer,
                sentiment,
                callback
            )
        );
    }

    getQuestionAndResponses() {
        const index = this.props.survey.questionIndex;
        const question = this.props.survey.questions[index];
        const answer = question && this.props.survey.answers[question.id];
        const sentiment = answer && answer.sentiment;
        return [question, answer, sentiment];
    }

    render() {
        const [
            question,
            answer,
            sentiment
        ] = this.getQuestionAndResponses();

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
                            dispatch={this.props.dispatch}
                            text={question.text}
                            options={question.Answers}
                            id={question.id}
                            multipleChoice={this.props.survey.multipleChoice}
                            hasSentiment={this.props.survey.sentiment}
                            onNextClick={this.gotoNextQuestion.bind(this)}
                            onBackClick={this.gotoPrevQuestion.bind(this)}
                            answerId={answer && answer.AnswerId}
                            sentiment={sentiment} />
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
    routeParams: PropTypes.object
};

module.exports = connect(
    state => ({
        ui: state.ui,
        login: state.login,
        survey: state.survey
    })
)(Survey);
