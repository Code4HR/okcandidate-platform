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

class Category extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchCategoryList());
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
    router: PropTypes.object
};

export default connect(
  state => ({
      ui: state.ui,
      login: state.login,
      category: state.category
  })
)(Category);
