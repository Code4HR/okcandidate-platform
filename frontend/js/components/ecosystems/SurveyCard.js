'use strict';

import React, { PropTypes, Component } from 'react';
import Icon from './../atoms/Icon';

import SentimentSelector from './../organisms/SentimentSelector';
import RadioButtons from './../organisms/RadioButtons';
import Card from './../atoms/Card';

import {
    setQuestionAnswerId
} from './../../redux/actions/survey-actions';

class SurveyCard extends Component {
    constructor(props) {
        super(props);
    }

    onRadioButtonChange(id) {
        this.props.dispatch(setQuestionAnswerId(id, this.props.id));
    }

    render() {
        const agreement = !this.props.multipleChoice && this.props.hasSentiment;
        const leftLabel = agreement ? 'Strongly\nDisagree' : 'Don\'t care';
        const rightLabel = agreement ? 'Strongly\nAgree' : 'Care a lot';

        return (
            <Card
                className="survey-card"
                actions={[
                    <button
                        key={1}
                        onClick={this.props.onBackClick}>
                        Back
                    </button>,
                    <button
                        key={2}
                        onClick={this.props.onNextClick}>
                        Next
                    </button>
                ]}>
                <Icon className="big">check_circle</Icon>
                <p className="question-text">{this.props.text}</p>

                <div className="survey-card-interface">
                    {
                        this.props.multipleChoice &&
                        <RadioButtons
                            hideName
                            name="multiplechoice"
                            options={this.props.options}
                            selected={this.props.answerId}
                            labelKey="text"
                            onChange={this.onRadioButtonChange.bind(this)} />
                    }

                    {
                        this.props.hasSentiment && !agreement &&
                        <label>How important is this to you?</label>
                    }

                    {
                        this.props.hasSentiment &&
                            <SentimentSelector
                                id={this.props.id}
                                sentiment={this.props.sentiment}
                                leftLabel={leftLabel}
                                rightLabel={rightLabel}
                                dispatch={this.props.dispatch} />
                    }
                </div>
            </Card>
        );
    }
}

SurveyCard.propTypes = {
    text: PropTypes.string,
    dispatch: PropTypes.func,
    id: PropTypes.number,
    sentiment: PropTypes.number,
    hasSentiment: PropTypes.bool,
    multipleChoice: PropTypes.bool,
    options: PropTypes.array,
    answerId: PropTypes.number,
    onBackClick: PropTypes.func,
    onNextClick: PropTypes.func
};

module.exports = SurveyCard;
