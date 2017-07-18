import React, { PropTypes, Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cardStyle = {};

        if (this.props.onClick) {
            cardStyle.cursor = 'pointer';
        }

        return (
            <section
                style={cardStyle}
                className={`card ${this.props.className}`}
                style={this.props.style}
                onClick={this.props.onClick}>
                {this.props.children}
            </section>
        );
    }

}

Card.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;
