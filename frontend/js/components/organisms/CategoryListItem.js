import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';

class CategoryListItem extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div class='category-item'>
        <div class='category-rank'>{this.props.rank}</div>
        <div class='category-info'>
          {
            this.props.icon &&
            <Icon>{this.props.icon}</Icon>
          }
          <span class='category-name'>{this.props.name}</span>
        </div>
      </div>
    )
  }

}

CategoryListItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    rank: PropTypes.number
};

export default CategoryListItem;
