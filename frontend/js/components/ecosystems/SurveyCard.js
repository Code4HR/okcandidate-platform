'use strict';

import React, { PropTypes, Component } from 'react';
import Icon from './../atoms/Icon';

// import AgreementSelector from './../organisms/AgreementSelector';
import MultipleChoiceSelector from './../organisms/MultipleChoiceSelector';
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

                <div className="survey-card-interface">

                    {/*
                    <AgreementSelector
                        id={this.props.id}
                        agreement={this.props.agreement}
                        dispatch={this.props.dispatch} />
                    */}

                    <MultipleChoiceSelector
                        id={this.props.id}
                        selection={this.props.agreement}
                        dispatch={this.props.dispatch} />

                    <div className="survey-card-buttons">
                        <button onClick={this.props.onBackClick}>
                            Back
                        </button>
                        <button onClick={this.props.onNextClick}>
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
    agreement: PropTypes.number,
    onBackClick: PropTypes.func,
    onNextClick: PropTypes.func
};

module.exports = SurveyCard;
