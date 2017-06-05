import React, { PropTypes, Component } from 'react';

import Icon from './../atoms/Icon';

class CategoryListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category-list-item">
                <div className="rank">
                    <label>{this.props.rank}</label>
                </div>

                <div className="category-name card">
                    {
                      this.props.icon &&
                      <Icon className="medium padding">{this.props.icon}</Icon>
                    }
                    <span className="category-name-label">{this.props.name}</span>
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
