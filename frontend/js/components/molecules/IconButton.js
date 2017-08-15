import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './../atoms/Icon';

class IconButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="icon-button">
                <Icon class="big padded">{this.props.icon}</Icon>
            </button>
        );
    }
}

IconButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default IconButton;
