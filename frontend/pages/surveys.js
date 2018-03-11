import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { gotoRoute } from './../store/actions/router-actions';
import { initStore } from './../store';

import Layout from './../components/Layout';
import Card from './../components/atoms/Card';
import LocationForm from './../components/templates/LocationForm';
import LoadingIndicator from './../components/organisms/LoadingIndicator';

import {
    fetchSurveys
} from './../store/actions/pick-survey-actions';

class SurveySelector extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.url && !this.props.url.query.regionLimit) {
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
            <Layout>
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
            </Layout>
        );
    }
}

SurveySelector.propTypes = {
    pickSurvey: PropTypes.object,
    params: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func
};

export default withRedux(initStore, (state) => ({
    pickSurvey: state.pickSurvey,
    ui: state.ui
}))(SurveySelector);
