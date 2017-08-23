import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from './../atoms/Icon';

class IconButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={`icon-button ${this.props.square ? 'square' : ''}`}>
                {
                    this.props.label &&
                    <label>{this.props.label}</label>
                }
                {
                    this.props.icon &&
                    <Icon class="big padded">{this.props.icon}</Icon>
                }
                { this.props.children }
            </button>
        );
    }
}

IconButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    label: PropTypes.string,
    square: PropTypes.bool
};

export default IconButton;
