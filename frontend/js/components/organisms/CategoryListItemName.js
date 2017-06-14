'use strict';

import React, { Component, PropTypes } from 'react';
import Icon from './../atoms/Icon';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const ItemTypes = {
    CARD: 'card'
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    }
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    }
};

class CategoryListItemName extends Component {
    render() {
        const {
            connectDragSource,
            connectDropTarget,
            isDragging
        } = this.props;

        const template = (
            <div className={`category-name card ${isDragging ? 'hidden' : ''}`}>
                {
                    this.props.icon &&
                    <Icon className="medium padding">{this.props.icon}</Icon>
                }
                <span className="category-name-label">{this.props.name}</span>
            </div>
        );

        if (connectDragSource && connectDropTarget) {
            return connectDragSource(connectDropTarget((template)));
        }
        return template;
    }
}

CategoryListItemName.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    index: PropTypes.number,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    isDragging: PropTypes.bool
};

const DropCategoryListItemName = DropTarget(ItemTypes.CARD, cardTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))(CategoryListItemName);

const DragDropCategoryListItemName = DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(DropCategoryListItemName);

export {
    DragDropCategoryListItemName as CategoryListItemName,
    CategoryListItemName as CategoryListItemNameStatic
};

