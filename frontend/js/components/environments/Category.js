'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import CategoryList from '../ecosystems/CategoryList';
import LoadingIndicator from './../organisms/LoadingIndicator';
import { gotoRoute } from './../../redux/actions/router-actions';

import {
    fetchCategoryList
} from './../../redux/actions/category-actions';

import {
    fetchSurveyResult,
    createSurveyResult
} from './../../redux/actions/survey-actions';

class Category extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const SurveyId = this.props.params.id;
        const fetchCategories = this.props.dispatch.bind(
            this,
            fetchCategoryList()
        );

        if (this.props.location.query.newSurvey) {
            return this.props.dispatch(
                createSurveyResult(SurveyId, fetchCategories)
            );
        }

        this.props.dispatch(
            fetchSurveyResult((error, response) => {
                if (error) { return; }
                if (!response.id) {
                    return this.props.dispatch(createSurveyResult(SurveyId, fetchCategories));
                }
                return fetchCategories();
            })
        );
    }

    next() {
        gotoRoute(`/survey/${this.props.router.params.id}/questions`);
    }

    render() {
        const categories = this.props.category.categories;
        return (
            <div className="container">

                <p>Sort these categories in order of importance to you.</p>

                {
                    !categories.length &&
                    <LoadingIndicator message="Loading Issues" />
                }

                <CategoryList
                    dispatch={this.props.dispatch}
                    categories={categories.sort((catA, catB) => {
                        return catA.rank - catB.rank;
                    })} />

                <button onClick={this.next.bind(this)}>OK</button>

            </div>
        );
    }
}

Category.propTypes = {
    category: PropTypes.object,
    ui: PropTypes.object,
    login: PropTypes.object,
    survey: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.object,
    location: PropTypes.object,
    router: PropTypes.object
};

export default connect(
    state => ({
        ui: state.ui,
        login: state.login,
        category: state.category
    })
)(Category);
