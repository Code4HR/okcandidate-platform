import React, { PropTypes, Component } from 'react'

import Card from './../atoms/Card'
import MenuListItem from './../organisms/MenuListItem'

const menuItems = [
  {
    label: 'Surveys',
    icon: 'insert_drive_file',
    href: '/admin/surveys/'
  },
  {
    label: 'Users',
    icon: 'face',
    href: '/admin/users/'
  },
  {
    label: 'Other thing',
    href: '/admin/nowhere/'
  }
]

class AdminMenu extends Component {

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

AdminMenu.propTypes = {}

export default AdminMenu
