'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false
        }
    }

    onFocus(e) {
        this.setState({focus: true});
    }

    onBlur(e) {
        this.setState({focus: false});
    }

    render() {
        return (
            <div className="checkbox">
                <label
                    htmlFor={this.props.name}>
                    <input
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                        onChange={this.props.onChange}
                        readOnly
                        type="checkbox"
                        checked={this.props.checked}
                        id={this.props.name}
                        name={this.props.name}
                        value={this.props.name} />
                    {this.props.label}
                    <div className={`checkbox-indicator ${this.props.checked && 'checked'} ${this.state.focus && 'focused'}`}></div>
                </label>
                {
                    this.props.help &&
                    <div className="checkbox-help">
                        <span>{this.props.help}</span>
                    </div>
                }
            </div>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    help: PropTypes.string
};

export default Checkbox;
