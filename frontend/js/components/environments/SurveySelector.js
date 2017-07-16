'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

class SurveySelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <Card>
                    <pre>Survey Selector</pre>
                </Card>
            </section>
        );
    }
}

SurveySelector.propTypes = {
    surveys: PropTypes.array
};

export default connect(
    state => ({
        pickSurvey: state.pickSurvey,
        ui: state.ui
    })
)(SurveySelector);
