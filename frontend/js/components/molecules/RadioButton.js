'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {
    render() {
        return (
            <label
                className="radio-button-item">
                <input
                    onChange={this.props.onChange.bind(this, this.props.id)}
                    type="radio"
                    id={this.props.label}
                    name={this.props.name}
                    checked={this.props.checked}
                    value={this.props.label} />
                {this.props.label}
                <div className={`radio-button-indicator ${this.props.checked && 'checked'}`}></div>
            </label>
        );
    }
}

RadioButton.propTypes = {
    index: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.number
};

export default RadioButton;
