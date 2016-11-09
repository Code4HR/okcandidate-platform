import React, { PropTypes, Component } from 'react'

import Icon from './../atoms/Icon'

class IconButton extends Component {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="icon-button">
        <Icon>{this.props.icon}</Icon>
      </button>
    )
  }

}

IconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
}

export default IconButton
