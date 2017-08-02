'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';
import LoadingIndicator from './../organisms/LoadingIndicator';

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
        this.props.dispatch(fetchSurveyQuestions(this.props.routeParams.id));
    }

    gotoPrevQuestion() {
        if (this.props.survey.questionIndex === 0) {
            return gotoRoute(`/survey/${this.props.routeParams.id}`);
        }
        return this.props.dispatch(gotoPrevQuestion());
    }

    gotoNextQuestion() {
        if (this.props.survey.questionIndex >= this.props.survey.questions.length - 1) {
            return gotoRoute('/results/publicPhraseOne');
        }
        return this.props.dispatch(gotoNextQuestion());
    }

    render() {
        const index = this.props.survey.questionIndex;
        const question = this.props.survey.questions[index];

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
                            answerId={question.answerId}
                            sentiment={question.sentiment} />
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
