'use strict';

import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';

class SurveyCard extends Component {
    render() {
        return (
            <Card>
                <pre>SurveyCard</pre>
                <Icon />
            </Card>
        );
    }
}

SurveyCard.propTypes = {

};

module.exports = SurveyCard;
