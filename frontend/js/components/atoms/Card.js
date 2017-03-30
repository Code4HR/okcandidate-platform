import React, { PropTypes, Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <section
        className="card height-1"
        style={this.props.style}>
        {this.props.children}
      </section>
    );
    }

}

Card.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any
};

export default Card;
