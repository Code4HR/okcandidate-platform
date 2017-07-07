'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hr extends Component {
    render() {
        const hrLineStyle = {
            background: this.props.background
        };

        return (
            <div className="hr">
                <div className="hr-line" style={hrLineStyle}></div>
                {
                    this.props.label &&
                    <label className="hr-label">{this.props.label}</label>
                }
            </div>
        );
    }
}

Hr.propTypes = {
    label: PropTypes.string,
    background: PropTypes.string
};

export default Hr;
