import React, { PropTypes, Component } from 'react'

class Icon extends Component {

  render() {
    return (
      <i className="material-icons">{this.props.children}</i>
    )
  }

}

Icon.propTypes = {
  children: PropTypes.any
}

export default Icon
