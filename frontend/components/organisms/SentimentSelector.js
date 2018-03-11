import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './../atoms/Icon';

import {
    setQuestionSentiment
} from './../../redux/actions/survey-actions';

const Rating = require('react-rating');

class SentimentSelector extends Component {
    onHeartClick(sentiment) {
        this.props.dispatch(setQuestionSentiment(sentiment, this.props.id));
    }

    render() {
        return (
            <div className="sentiment-selector">
                <Rating
                    initialRate={this.props.sentiment}
                    onChange={this.onHeartClick.bind(this)}
                    empty={<Icon className="hearts big padded">favorite_border</Icon>}
                    full={<Icon className="hearts big padded">favorite</Icon>}
                />
                <div className="sentiment-selector-labels">
                    <label className="argument-selector-label-disagree">
                        {this.props.leftLabel}
                    </label>
                    <label className="argument-selector-label-agree">
                        {this.props.rightLabel}
                    </label>
                </div>
            </div>
        );
    }
}

SentimentSelector.propTypes = {
    dispatch: PropTypes.func,
    sentiment: PropTypes.number,
    id: PropTypes.number,
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string
};

module.exports = SentimentSelector;
