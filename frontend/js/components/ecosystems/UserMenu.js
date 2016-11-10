import React, { PropTypes, Component } from 'react'

import Card from './../atoms/Card'
import MenuListItem from './../organisms/MenuListItem'

const menuItems = [
  {
    label: 'Surveys',
    icon: 'insert_drive_file',
    href: '/surveys/'
  },
  {
    label: 'Other thing',
    href: '/nowhere/'
  }
]

class UserMenu extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="menu">
        {
          menuItems.map((menuItem, index) => {
            return (
              <MenuListItem
                key={index}
                href={menuItem.href}
                icon={menuItem.icon}
                label={menuItem.label} />
            )
          })
        }
      </ul>
    )
  }

}

UserMenu.propTypes = {}

export default UserMenu
