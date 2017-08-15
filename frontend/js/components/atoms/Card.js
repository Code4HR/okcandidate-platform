import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './../atoms/Icon';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section
                className={`${this.props.className} card`}
                onClick={this.props.onClick}>
                {
                    (!!this.props.title || !!this.props.onClose) &&
                    <div className="card-title">
                        <h2>{this.props.title}</h2>
                        {this.props.onClose &&
                            <Icon onClick={this.props.onClose}>close</Icon>
                        }
                    </div>
                }
                <div className="card-body">
                    { this.props.children }
                </div>

                <div className="card-actions">
                    {this.props.actions}
                </div>
            </section>
        );
    }

}

Card.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.any,
    onClose: PropTypes.func
};

export default Card;
