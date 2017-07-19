'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render() {
        return (
            <label 
                htmlFor={this.props.name} 
                className="checkbox">
                <input
                    onChange={this.props.onChange}
                    readOnly
                    type="checkbox"
                    checked={this.props.checked}
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.name} />
                {this.props.label}
                <div className={`checkbox-indicator ${this.props.checked && 'checked'}`}></div>
            </label>
        )
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default Checkbox;