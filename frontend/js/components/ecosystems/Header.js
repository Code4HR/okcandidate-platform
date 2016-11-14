import React, { PropTypes, Component } from 'react'

import AppLogo from './../organisms/AppLogo'
import Profile from './../organisms/Profile'

import {
  toggleSidebarVisibility
} from './../../redux/actions/ui-actions'

class Header extends Component {

  toggleSidebarVisibility() {
    this.props.dispatch(toggleSidebarVisibility())
  }

  render() {

    return (
      <header className="app-header height-1">
        <div className="flex-container">
          <div className="twelve columns">
            <AppLogo onClick={this.toggleSidebarVisibility.bind(this)} />
          </div>
        </div>
      </header>
    )

  }

}

Header.propTypes = {
  dispatch: PropTypes.func
}

export default Header
