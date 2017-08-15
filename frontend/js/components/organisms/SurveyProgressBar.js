'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SurveyProgressBar extends Component {

    getHelpText(remaining) {
        if (remaining === 1) {
            return `Answer at least ${remaining} more question.`;
        }
        else if (remaining > 1) {
            return `Answer at least ${remaining} more questions.`;
        }
    }

    render() {
        const barStyle = {width: `${(this.props.value / this.props.max) * 100}%`};
        const minimumStyle = {left: `${(this.props.minimum / this.props.max) * 100}%`};

        const remaining = this.props.minimum - this.props.value;
        const buttonDisabled = this.props.value < this.props.minimum;
        const helpText = this.getHelpText(remaining);

        return (
            <section className="survey-progress-bar">
                <div className="bar-and-button-container">
                    <div
                        aria-valuenow={this.props.value}
                        aria-valuemin={0}
                        aria-valuemax={this.props.max}
                        className="bar-container">
                        {
                            remaining > 0 &&
                            <div
                                style={minimumStyle}
                                className="minimum-threshold">
                                <label>Minimum</label>
                            </div>
                        }

                        <div
                            style={barStyle}
                            className="bar"></div>
                    </div>
                    <button
                        onClick={this.props.onClick}
                        className="primary"
                        disabled={buttonDisabled} >
                        Results
                    </button>
                </div>

                {
                    helpText &&
                    <div className="bar-help">{helpText}</div>
                }
            </section>
        );
    }
}

SurveyProgressBar.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    minimum: PropTypes.number,
    onClick: PropTypes.func
};

export default SurveyProgressBar;
