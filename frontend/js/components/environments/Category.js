'use strict';

import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from '../atoms/Card';
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
        <Card>
          <pre>Category Page</pre>
          <CategoryList
            categories={categories.sort((catA, catB) => {
                return catA.rank - catB.rank;
            })} />
        </Card>
      );
    }
}

Category.PropTypes = {
    ui: PropTypes.object,
    login: PropTypes.object,
    survey: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      ui: state.ui,
      login: state.login,
      category: state.category
  })
)(Category);
