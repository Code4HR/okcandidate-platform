'use strict';

import React, { Component } from 'react';
import RadioButton from './../molecules/RadioButton';
import PropTypes from 'prop-types';

class RadioButtons extends Component {
    
    render() {

        return (
            <div className="radio-buttons">
                <label>{this.props.name}</label>
                {
                    this.props.options.map((item, index) => {
                        return (
                            <RadioButton 
                                onChange={this.props.onChange}
                                checked={item.id === this.props.selected}
                                key={index}
                                id={item.id}
                                label={item.name}
                                name={this.props.name} />
                        )
                    })
                }
                {
                    this.props.help &&
                    <div className="radio-buttons-help">
                        <span>{this.props.help}</span>
                    </div>
                }
            </div>
        );
    }
}

RadioButtons.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    checked: PropTypes.number,
    onChange: PropTypes.func,
    help: PropTypes.string
}

export default RadioButtons;