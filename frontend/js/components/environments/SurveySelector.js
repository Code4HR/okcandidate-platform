'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gotoRoute } from './../../redux/actions/router-actions';

import { connect } from 'react-redux';

import Card from './../atoms/Card';
import LocationForm from './../ecosystems/LocationForm';
import LoadingIndicator from './../organisms/LoadingIndicator';

import {
    fetchSurveys
} from './../../redux/actions/pick-survey-actions';


class SurveySelector extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.location && !this.props.location.query.regionLimit) {
            this.props.dispatch(fetchSurveys());
        }
    }

    onClickSurveyCard(id, categorySort) {
        if (categorySort) {
            return gotoRoute(`/survey/${id}/category?newSurvey=true`);
        }
        return gotoRoute(`/survey/${id}/questions?newSurvey=true`);
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

                {
                    this.props.pickSurvey.isFetching &&
                    !this.props.pickSurvey.surveys.length &&
                    <LoadingIndicator message="Loading Surveys" />
                }

                {this.props.pickSurvey.surveys.map((survey, index) => {
                    return (
                        <Card
                            title={survey.name}
                            key={index}
                            actions={<button>Take it!</button>}
                            onClick={this.onClickSurveyCard.bind(
                                this,
                                survey.id,
                                survey.categorySort
                            )}>
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
