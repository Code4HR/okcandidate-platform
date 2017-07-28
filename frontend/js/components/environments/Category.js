'use strict';

import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import CategoryList from '../ecosystems/CategoryList';

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

    render() {
        const categories = this.props.category.categories;
        return (
            <div className="container">
                <CategoryList
                    surveyId={this.props.router.params.id}
                    dispatch={this.props.dispatch}
                    categories={categories.sort((catA, catB) => {
                        return catA.rank - catB.rank;
                    })} />
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
