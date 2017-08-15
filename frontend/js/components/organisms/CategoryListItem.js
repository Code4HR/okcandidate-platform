import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CategoryListItemName } from './../organisms/CategoryListItemName';

class CategoryListItem extends Component {
    render() {
        return (
            <div className="category-list-item">
                {
                    this.props.index + 1 &&
                    <div className="rank">
                        <label>{this.props.index + 1}</label>
                    </div>
                }

                <CategoryListItemName
                    index={this.props.index}
                    id={this.props.id}
                    name={this.props.name}
                    icon={this.props.icon}
                    moveCard={this.props.moveCard} />
            </div>
        );
    }
}

CategoryListItem.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    index: PropTypes.number,
    moveCard: PropTypes.func,
    id: PropTypes.number
};

export default CategoryListItem;
