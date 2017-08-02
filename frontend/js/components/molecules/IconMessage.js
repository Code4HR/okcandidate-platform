'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './../atoms/Icon';

class IconMessage extends Component {
    render() {
        return (
            <div className="icon-message">
                <Icon className="xx-big">{this.props.icon}</Icon>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

IconMessage.propTypes = {
    icon: PropTypes.string,
    message: PropTypes.string
};

export default IconMessage;
