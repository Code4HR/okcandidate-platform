'use strict';

import React, { PropTypes, Component } from 'react';
import Icon from './../atoms/Icon';

import AgreementSelector from './../organisms/AgreementSelector';
import Card from './../atoms/Card';

class SurveyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="survey-card">
                <Icon className="big">check_circle</Icon>
                <p className="question-text">{this.props.text}</p>

                <AgreementSelector
                    id={this.props.id}
                    agreement={this.props.agreement}
                    dispatch={this.props.dispatch} />

                <div className="survey-card-buttons">
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
    id: PropTypes.number,
    agreement: PropTypes.number
};

module.exports = SurveyCard;
