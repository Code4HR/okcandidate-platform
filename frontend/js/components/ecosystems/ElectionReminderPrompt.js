'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';

class ElectionReminderPrompt extends Component {
    render() {
        return (
            <Card
                title="Election Day Reminder" className="prompt-card"
                actions={[
                    <button
                        key="1"
                        onClick={this.props.onClick}
                        className="primary">Sure</button>,
                    <button
                        key="2"
                        onClick={this.props.onClose}>No Thanks</button>
                ]}>
                Would you like us to email or text you these results on election day?
            </Card>
        );
    }
}

ElectionReminderPrompt.propTypes = {
    onClose: PropTypes.func,
    onClick: PropTypes.func
};

module.exports = ElectionReminderPrompt;
