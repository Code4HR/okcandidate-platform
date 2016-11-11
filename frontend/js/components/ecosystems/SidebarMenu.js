import React, { PropTypes, Component } from 'react'

import MenuListItem from './../organisms/MenuListItem'

class SidebarMenu extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.menu.map((menuItem, index) => {
            return (
              <nav className="menu">
                <label>{menuItem.label}</label>
                <ul>
                  {
                    menuItem.submenu.map((menuItem, index) => {
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
              </nav>
            )
          })
        }
      </div>  
    )
  }

}

SidebarMenu.propTypes = {}

export default SidebarMenu
