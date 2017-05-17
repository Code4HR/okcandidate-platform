import React, { PropTypes, Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <section
        className={`card height-1 ${this.props.className}`}
        style={this.props.style}>
        {this.props.children}
      </section>
        );
    }

}

Card.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string
};

export default Card;
