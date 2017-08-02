'use strict';

import React, { Component } from 'react';
import RadioButton from './../molecules/RadioButton';
import PropTypes from 'prop-types';

class RadioButtons extends Component {

    render() {

        return (
            <div className="radio-buttons">
                {
                    !this.props.hideName &&
                    <label>{this.props.name}</label>
                }
                {
                    this.props.options.map((item, index) => {
                        const label = item[this.props.labelKey] || item.name;
                        return (
                            <RadioButton
                                onChange={this.props.onChange}
                                checked={item.id === this.props.selected}
                                key={index}
                                id={item.id}
                                label={label}
                                name={this.props.name} />
                        );
                    })
                }
                {
                    this.props.help &&
                    <div className="radio-buttons-help">
                        <span>{this.props.help}</span>
                    </div>
                }
                {
                    this.props.error &&
                    <div className="radio-buttons-error">
                        <span>{this.props.error}</span>
                    </div>
                }
            </div>
        );
    }
}

RadioButtons.propTypes = {
    name: PropTypes.string,
    labelKey: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.number,
    onChange: PropTypes.func,
    help: PropTypes.string,
    error: PropTypes.string,
    hideName: PropTypes.bool
};

export default RadioButtons;
