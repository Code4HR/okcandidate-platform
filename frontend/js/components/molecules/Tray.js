'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tray extends Component {
    render() {
        return (
            <div className="tray">
                { this.props.children }
            </div>
        )
    }
}

Tray.propTypes = {
    children: PropTypes.any
}

export default Tray