import React, { PropTypes, Component } from 'react';

import CategoryListItem from './../organisms/CategoryListItem';

class CategoryList extends Component {

    render() {

        return (
      <div className="category-list">
        {
          this.props.categories.map((categoryItem, index) => {
              return (<CategoryListItem
              key={index}
              name={categoryItem.name}
              icon={categoryItem.icon}
              rank={categoryItem.rank} />);
          })
        }
      </div>
    );

    }

}

CategoryList.propTypes = {
    categories: PropTypes.array
};

export default CategoryList;
