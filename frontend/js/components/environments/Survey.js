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
