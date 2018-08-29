import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { gotoRoute } from './../store/actions/router-actions';
import { initStore } from './../store';

import SurveyCard from './../components/templates/SurveyCard';
import LoadingIndicator from './../components/organisms/LoadingIndicator';
import Layout from './../components/Layout';

import {
    gotoNextQuestion,
    gotoPrevQuestiion,
    fetchSurveyQuestions,
    createSurveyResultAnswer,
    updateSurveyResultAnswer,
    fetchSurveyResult
} from './../store/actions/survey-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchSurveyResult(this.props.url.query.id, (error) => {
            if (!error) {
                this.props.dispatch(fetchSurveyQuestions(this.props.url.query.id));
            }
        }));
    }

    gotoPrevQuestion() {
        if (this.props.survey.questionIndex === 0) {
            return gotoRoute(`/survey/${this.props.url.query.id}`);
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
            <Layout>
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
            </Layout>
        );
    }
}

Survey.propTypes = {
    dispatch: PropTypes.func,
    survey: PropTypes.object,
    routeParams: PropTypes.object
};

export default withRedux(initStore, state => ({
    ui: state.ui,
    login: state.login,
    survey: state.survey
}))(Survey);
