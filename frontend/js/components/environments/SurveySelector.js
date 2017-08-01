'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gotoRoute } from './../../redux/actions/router-actions';

import { connect } from 'react-redux';

import Card from './../atoms/Card';
import LocationForm from './../ecosystems/LocationForm';

import {
    fetchSurveys
} from './../../redux/actions/pick-survey-actions';

class SurveySelector extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.location && !this.props.location.query.regionLimit) {
            this.props.dispatch(fetchSurveys());
        }
    }

    onClickSurveyCard(id, categorySort) {
        if (categorySort) {
            return gotoRoute(`/survey/${id}/category`);
        }
        return gotoRoute(`/survey/${id}/questions`);
    }

    render() {
        return (
            <section className="container">
                {   this.props.pickSurvey.surveys.length === 0 &&
                    this.props.location &&
                    this.props.location.query.regionLimit &&
                    <Card>
                        <LocationForm
                            addressError={this.props.pickSurvey.addressError}
                            status={this.props.pickSurvey.status}
                            dispatch={this.props.dispatch} />
                    </Card>
                }

                {this.props.pickSurvey.surveys.map((survey, index) => {
                    return (
                        <Card
                            key={index}
                            onClick={this.onClickSurveyCard.bind(
                                this,
                                survey.id,
                                survey.categorySort
                            )}>
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
    pickSurvey: PropTypes.object,
    params: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
    state => ({
        pickSurvey: state.pickSurvey,
        ui: state.ui
    })
)(SurveySelector);
