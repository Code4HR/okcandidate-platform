import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';

class CategoryListItem extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className='category-item'>
        <div className='category-rank'>{this.props.rank}</div>
        <div className='category-info'>
          {
            this.props.icon &&
            <Icon>{this.props.icon}</Icon>
          }
          <span className='category-name'>{this.props.name}</span>
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
