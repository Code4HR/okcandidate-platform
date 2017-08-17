'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from './../atoms/Modal';
import TextField from './../organisms/TextField';
import Checkbox from './../molecules/Checkbox';

import {
    setEmailValue,
    setPhoneValue,
    toggleNewsletterValue,
    toggleModalState,
    createElectionReminder
} from './../../redux/actions/result-actions';

class ElectionReminderModal extends Component {

    setEmail(e) {
        this.props.dispatch(setEmailValue(e.target.value));
    }

    setPhone(e) {
        this.props.dispatch(setPhoneValue(e.target.value));
    }

    toggleNewsletter() {
        this.props.dispatch(toggleNewsletterValue());
    }

    onClose() {
        this.props.dispatch(toggleModalState());
    }

    onSubmit() {
        this.props.dispatch(createElectionReminder(
            this.props.SurveyResultId,
            {
                email: this.props.email.value,
                phone: this.props.phone.value
            }
        ));
    }

    render() {
        return (
            <Modal
                active={this.props.active}
                title="Election Reminder Signup"
                onClose={this.props.onClose}
                actions={[
                    <button
                        key="1"
                        className="primary"
                        onClick={this.onSubmit.bind(this)}>
                        Submit
                    </button>,
                    <button
                        key="2"
                        onClick={this.onClose.bind(this)}>
                        Close
                    </button>
                ]}>

                <p>We can send you a quick reminder on election day if you provide either your email address or mobile phone number. <a href="#">Privacy Policy</a></p>

                <div>
                    <TextField
                        name="email-address"
                        label="Email Address"
                        value={this.props.email.value}
                        error={this.props.email.error}
                        onChange={this.setEmail.bind(this)}
                        help="e.g. hello@example.com" />
                </div>

                <div>
                    <TextField
                        name="phone"
                        label="Mobile Number"
                        value={this.props.phone.value}
                        error={this.props.phone.error}
                        onChange={this.setPhone.bind(this)}
                        help="e.g. 555-555-5555" />
                </div>

                <Checkbox
                    name="newsletter"
                    label="Sign up for a newsletter"
                    checked={this.props.newsletter}
                    onChange={this.toggleNewsletter.bind(this)}
                    help="Do you want occasional mail?" />

            </Modal>
        );
    }
}

ElectionReminderModal.propTypes = {
    newsletter: PropTypes.bool,
    email: PropTypes.object,
    phone: PropTypes.object,
    dispatch: PropTypes.func,
    SurveyResultId: PropTypes.number,
    active: PropTypes.bool,
    onClose: PropTypes.func
};

export default ElectionReminderModal;
