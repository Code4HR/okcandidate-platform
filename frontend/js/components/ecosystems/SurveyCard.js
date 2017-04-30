'use strict';

import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';
import {
  setPromptAgreement
} from './../../redux/actions/survey-actions';

const Rating = require('react-rating');

class SurveyCard extends Component {
    constructor(props) {
      super(props);
    }

    onHeartClick(agreement) {
      this.props.dispatch(setPromptAgreement(agreement, this.props.id));
    }

    render() {
        return (
            <Card className="survey-card">
                <Icon>check_circle</Icon>
                <p>{this.props.text}</p>
                <Rating
                  initialRate={this.props.agreement}
                  onChange={this.onHeartClick.bind(this)}
                  empty={<Icon className="hearts">favorite_border</Icon>}
                  full={<Icon className="hearts">favorite</Icon>}
                />
                <div>
                  <button>Skip</button>
                  <button>Next</button>
                </div>
            </Card>
        );
    }
}

SurveyCard.propTypes = {
    text: PropTypes.string,
    dispatch: PropTypes.func,
    id: PropTypes.number
};

module.exports = SurveyCard;
