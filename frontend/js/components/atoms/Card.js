import React, { PropTypes, Component } from 'react'

class Card extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="card">
        {this.props.children}
      </section>
    )
  }

}

Card.propTypes = {
  children: PropTypes.any
}

export default Card
