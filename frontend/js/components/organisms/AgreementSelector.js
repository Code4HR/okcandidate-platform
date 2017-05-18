'use strict';

import React, { Component, PropTypes } from 'react';
import Icon from './../atoms/Icon';

import {
  setPromptAgreement
} from './../../redux/actions/survey-actions';

const Rating = require('react-rating');

class AgreementSelector extends Component {
    onHeartClick(agreement) {
        this.props.dispatch(setPromptAgreement(agreement, this.props.id));
    }

    render() {
        return (
            <div className="agreement-selector">
                <Rating
                    initialRate={this.props.agreement}
                    onChange={this.onHeartClick.bind(this)}
                    empty={<Icon className="hearts big padded">favorite_border</Icon>}
                    full={<Icon className="hearts big padded">favorite</Icon>}
                />
                <div className="agreement-selector-labels">
                    <label className="argument-selector-label-disagree">
                        Strongly<br/>Disagree
                    </label>
                    <label className="argument-selector-label-agree">
                        Strongly<br/>Agree
                    </label>
                </div>
            </div>
        );
    }
}

AgreementSelector.propTypes = {
    dispatch: PropTypes.func,
    agreement: PropTypes.number,
    id: PropTypes.number
};

module.exports = AgreementSelector;
