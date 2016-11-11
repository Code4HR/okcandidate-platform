import React, { PropTypes, Component } from 'react'

import AppLogo from './../organisms/AppLogo'
import SidebarMenu from './../ecosystems/SidebarMenu'

import {
  toggleSidebarVisibility
} from './../../redux/actions/ui-actions' 

const adminMenu = [
  {
    label: 'Survey',
    submenu: [
      {
        label: 'New Survey',
        icon: 'add',
        href: '/admin/survey/new'
      },
      {
        label: 'Edit Survey',
        icon: 'edit',
        href: '/admin/survey/'
      },
      {

        label: 'Publish Survey',
        icon: 'publish',
        href: '/admin/surveys/'
      },
      {
        label: 'Analyze Survey',
        icon: 'trending_up',
        href: '/admin/users/'
      }
    ]
  },
  {
    label: 'Users',
    submenu: [
      {
        label: 'Manage Users',
        icon: 'people',
        href: '/admin/users/'
      }
    ]
  }
]

const userMenu = [
  {
    label: 'Survey',
    submenu: [
      {
        label: 'Take Survey',
        icon: 'check_circle',
        href: '/admin/survey/new'
      }
    ]
  }
]

class Sidebar extends Component {

  toggleSidebarVisibility() {
    this.props.dispatch(toggleSidebarVisibility())
  }

  getMenu() {
    switch(this.props.role) {
      case 'admin':
        return adminMenu
      case 'user':
        return userMenu
      default: 
        return userMenu
    }
  }

  render() {

    const style = {
      width: this.props.width,
      left: -this.props.width - 15
    }
    if (this.props.isOpen) {
      style.transform = `translatex(${this.props.width + 15}px)`
    }

    return (
      <section 
        style={style}
        className="sidemenu height-3">

        <div className="wrapper">
          <AppLogo onClick={this.toggleSidebarVisibility.bind(this)} />
        </div>

        <SidebarMenu menu={this.getMenu.call(this)} />

      </section>
    )
  }

}

Sidebar.propTypes = {
  width: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Sidebar

