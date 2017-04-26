'use strict';

import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';

class SurveyCard extends Component {
    render() {
        return (
            <Card className="survey-card">
                <Icon>check_circle</Icon>
                <p>{this.props.text}</p>
                <pre>react-rating component here</pre>
                <button>Skip</button>
                <button>Next</button>
            </Card>
        );
    }
}

SurveyCard.propTypes = {
    text: PropTypes.string
};

module.exports = SurveyCard;
