import React, { PropTypes, Component } from 'react';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import update from 'immutability-helper';

import CategoryListItem from './../organisms/CategoryListItem';
import { CategoryListItemNameStatic } from './../organisms/CategoryListItemName';

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);
        this.state = {
            categories: []
        };
    }

    generatePreview(type, item, style) {
        const category = this.state.categories.find(category => {
            return category.id === item.id;
        });
        return (
            <div style={style} className="category-list-item-dnd">
                <div className="category-list-item">
                    <CategoryListItemNameStatic
                        name={category.name}
                        icon={category.icon} />
                </div>
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            categories: newProps.categories
        });
    }

    moveCard(dragIndex, hoverIndex) {
        const { categories } = this.state;
        const dragCard = categories[dragIndex];

        this.setState(update(this.state, {
            categories: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    render() {
        return (
            <div className="category-list">
                <Preview generator={this.generatePreview.bind(this)} />
                {
                    this.state.categories.map((categoryItem, index) => {
                        return (
                            <CategoryListItem
                                key={categoryItem.id}
                                index={index}
                                id={categoryItem.id}
                                name={categoryItem.name}
                                icon={categoryItem.icon}
                                moveCard={this.moveCard} />
                        );
                    })
                }
            </div>
        );
    }
}

CategoryList.propTypes = {
    categories: PropTypes.array,
    dispatch: PropTypes.func
};

export default DragDropContext(MultiBackend(HTML5toTouch))(CategoryList);
