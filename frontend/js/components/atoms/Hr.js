'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hr extends Component {
    render() {
        return (
            <div className="hr">
                <div className="hr-line"></div>
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
    color: PropTypes.string
};

export default Hr;
