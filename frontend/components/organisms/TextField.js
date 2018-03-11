import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
    render() {
        return (
            <div className="text-field">
                {
                    this.props.label &&
                    <label htmlFor={this.props.name}>
                        {this.props.label}
                    </label>
                }
                <div className={`text-field-input ${this.props.button && 'has-button'}`}>
                    <input
                        id={this.props.name}
                        type={this.props.type || 'text'}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                    { this.props.button }
                </div>
                {
                    this.props.help &&
                    <div className="text-field-help">
                        <span>{this.props.help}</span>
                    </div>
                }
                {
                    this.props.error &&
                    <div className="text-field-error">
                        <span>{this.props.error}</span>
                    </div>
                }
            </div>
        );
    }
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    button: PropTypes.element,
    help: PropTypes.string
};

export default TextField;
