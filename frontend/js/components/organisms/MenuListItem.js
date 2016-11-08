import React, { PropTypes, Component } from 'react'

import Icon from './../atoms/Icon'

class MenuListItem extends Component {

  render() {
    return (
      <li>
        <a href={this.props.href}>
          {
            this.props.icon &&
            <Icon>{this.props.icon}</Icon>
          }
          <span>{this.props.label}</span>
        </a>
      </li>
    )
  }

}

MenuListItem.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.icon
}

export default MenuListItem
