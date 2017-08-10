'use strict';

import React, { Component } from 'react';
import Card from './../atoms/Card';

class ElectionReminderPrompt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {}
        };

        this.dismissReminder = this.dismissReminder.bind(this);
    }

    dismissReminder(event) {
        this.setState({style: {display: 'none'}});
    }

    render() {
        return (
            <Card className="prompt-card" style={this.state.style}>
                <h3>Election Day Reminder</h3>
                <p>Would you like us to email or text you these results on election day?</p>
                <button className="prompt-button">Sure</button>
                <button className="prompt-button" onClick={this.dismissReminder}>No Thanks</button>
            </Card>
        );
    }
}

module.exports = ElectionReminderPrompt;
