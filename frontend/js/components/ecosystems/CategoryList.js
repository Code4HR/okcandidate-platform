import React, { PropTypes, Component } from 'react';

import CategoryListItem from './../organisms/CategoryListItem';

class CategoryList extends Component {

  render() {

    return (
      <div className='category-list container'>
        {
          this.props.categories.map((categoryItem, index) => {
            return <CategoryListItem
              key={index}
              name={categoryItem.name}
              icon={categoryItem.icon}
              rank={categoryItem.rank} />
          })
        }
      </div>
    )

  }

}

CategoryList.PropTypes = {
    categories: PropTypes.Array
};

export default CategoryList;
