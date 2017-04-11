'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import SurveyCard from './../ecosystems/SurveyCard';

import {
  fetchCategoryList
} from './../../redux/actions/survey-actions';

class Survey extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <pre>Survey Page</pre>
                {
                    this.state.survey.map((question, index) => {
                        return <SurveyCard key={index}/>;
                    })
                }
            </article>
        );
    }
}

Survey.propTypes = {};

module.exports = connect(
    state => ({
        ui: state.ui,
        login: state.login,
        survey: state.survey
    })
)(Survey);
