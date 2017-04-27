'use strict';

import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';
const Rating = require('react-rating');

class SurveyCard extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    onHeartClick(heartNumber) {
      this.setState({
        agreement:heartNumber
      });
    }


    render() {
        return (
            <Card className="survey-card">
                <Icon>check_circle</Icon>
                <p>{this.props.text}</p>
                <Rating
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
    text: PropTypes.string
};

module.exports = SurveyCard;
