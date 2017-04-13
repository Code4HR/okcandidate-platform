'use strict';

import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';

class SurveyCard extends Component {
    render() {
        return (
            <Card>
                <Icon>check_circle</Icon>
                <Icon>info_circle</Icon>
                <pre>{this.props.text}</pre>
            </Card>
        );
    }
}

SurveyCard.propTypes = {
    text: PropTypes.string
};

module.exports = SurveyCard;
