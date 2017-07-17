'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gotoRoute } from './../../redux/actions/router-actions';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

class SurveySelector extends Component {
    constructor(props) {
        super(props);
    }

    onClickSurveyCard(id) {
        gotoRoute(`survey/${id}`);
    }

    render() {
        return (
            <section>
                {this.props.pickSurvey.surveys.map((survey, index) => {
                    return (
                        <Card
                            key={index}
                            onClick={this.onClickSurveyCard.bind(this, survey.id)}>
                            <h2>{survey.name}</h2>
                            <button>Take it!</button>
                        </Card>
                    );
                })}
            </section>
        );
    }
}

SurveySelector.propTypes = {
    pickSurvey: PropTypes.object
};

export default connect(
    state => ({
        pickSurvey: state.pickSurvey,
        ui: state.ui
    })
)(SurveySelector);
