'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Vr extends Component {
    render() {
        const style = {
            height: this.props.height
        };

        return (
            <div
                style={style}
                className="vr">
                <div className="vr-line"></div>
            </div>
        );
    }
}

Vr.propTypes = {
    height: PropTypes.number
};

export default Vr;
