import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';

class CategoryListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <div className="category-item row">
        <div className="category-rank one column">{this.props.rank}</div>
        <div className="category-info eleven columns">
          <div className="two columns">
            {
              this.props.icon &&
              <Icon>{this.props.icon}</Icon>
            }
          </div>
          <div className="ten columns">
            <span className="category-name">{this.props.name}</span>
          </div>
        </div>
      </div>
    );
    }

}

CategoryListItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    rank: PropTypes.number
};

export default CategoryListItem;
