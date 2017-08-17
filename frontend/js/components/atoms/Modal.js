'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './../atoms/Card';

class Modal extends Component {
    render() {
        if (this.props.active) {
            return (
                <div
                    onScroll={(event) => event.preventDefault()}
                    onClick={this.props.onClose}
                    className="modal">
                    <Card
                        title={this.props.title}
                        onClose={this.props.onClose}
                        actions={this.props.actions}>
                        {this.props.children}
                    </Card>
                </div>
            );
        }
        return (<div></div>);
    }
}

Modal.propTypes = {
    active: PropTypes.bool,
    title: PropTypes.string,
    actions: PropTypes.array,
    onClose: PropTypes.func,
    children: PropTypes.any
};

export default Modal;
