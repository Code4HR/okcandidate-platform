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
      <Card>
        <label>Sidebar</label>
        <ul className="menu">
          {
            menuItems.map(menuItem => {
              return (
                <MenuListItem
                  href={menuItem.href}
                  icon={menuItem.icon}
                  label={menuItem.label} />
              )
            })
          }
        </ul>
      </Card>
    )
  }

}

AdminMenu.propTypes = {}

export default AdminMenu
