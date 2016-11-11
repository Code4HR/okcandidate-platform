import React, { PropTypes, Component } from 'react'

import AppLogo from './../organisms/AppLogo'
import AdminMenu from './../ecosystems/AdminMenu'
import UserMenu from './../ecosystems/UserMenu'

import {
  toggleSidebarVisibility
} from './../../redux/actions/ui-actions' 

class Sidebar extends Component {

  toggleSidebarVisibility() {
    this.props.dispatch(toggleSidebarVisibility())
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

        {this.props.role === 'admin' && <AdminMenu />}
        {this.props.role === 'user' && <UserMenu />}

      </section>
    )
  }

}

Sidebar.propTypes = {
  width: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Sidebar

