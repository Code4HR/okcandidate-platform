'use strict';

import React, { PropTypes, Component } from 'react';
import Icon from './../atoms/Icon';

import AgreementSelector from './../organisms/AgreementSelector';
import Card from './../atoms/Card';

import {
    gotoNextQuestion,
    gotoPrevQuestion
} from './../../redux/actions/survey-actions';

class SurveyCard extends Component {
    constructor(props) {
        super(props);
    }

    gotoPrevQuestion() {
        this.props.dispatch(gotoPrevQuestion());
    }

    gotoNextQuestion() {
        this.props.dispatch(gotoNextQuestion());
    }

    render() {
        return (
            <Card className="survey-card">
                <Icon className="big">check_circle</Icon>
                <p className="question-text">{this.props.text}</p>

                <div className="survey-card-interface">
                    <AgreementSelector
                        id={this.props.id}
                        agreement={this.props.agreement}
                        dispatch={this.props.dispatch} />

                    <div className="survey-card-buttons">
                        <button onClick={this.gotoPrevQuestion.bind(this)}>
                            Back
                        </button>
                        <button onClick={this.gotoNextQuestion.bind(this)}>
                            Next
                        </button>
                    </div>
                </div>
            </Card>
        );
    }
}

SurveyCard.propTypes = {
    text: PropTypes.string,
    dispatch: PropTypes.func,
    id: PropTypes.number,
    agreement: PropTypes.number
};

module.exports = SurveyCard;
