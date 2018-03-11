import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppLogo from './../organisms/AppLogo';

import {
  toggleSidebarVisibility
} from './../../store/actions/ui-actions';

class Header extends Component {

    toggleSidebarVisibility() {
        this.props.dispatch(toggleSidebarVisibility());
    }

    render() {
        return (
          <header className="app-header">
            <div className="container">
              <div className="twelve columns">
                <AppLogo
                  displayMenuButton={this.props.isAdmin}
                  onClick={this.toggleSidebarVisibility.bind(this)} />
              </div>
            </div>
          </header>
        );
    }
}

Header.propTypes = {
    dispatch: PropTypes.func,
    isAdmin: PropTypes.bool
};

export default Header;
