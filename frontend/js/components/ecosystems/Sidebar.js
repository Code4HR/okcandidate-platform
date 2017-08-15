import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppLogo from './../organisms/AppLogo';
import Profile from './../organisms/Profile';
import SidebarMenu from './../ecosystems/SidebarMenu';

import {
  toggleSidebarVisibility
} from './../../redux/actions/ui-actions';

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
                label: 'Manage Surveys',
                icon: 'edit',
                href: '/admin/survey'
            },
            {
                label: 'Analyze Survey',
                icon: 'trending_up',
                href: '/admin/survey/analyze'
            }
        ]
    },
    {
        label: 'Users',
        submenu: [
            {
                label: 'Manage Users',
                icon: 'people',
                href: '/admin/user'
            }
        ]
    }
];

const userMenu = [
    {
        label: 'Survey',
        submenu: [
            {
                label: 'Take Survey',
                icon: 'check_circle',
                href: '/'
            }
        ]
    }
];

class Sidebar extends Component {

    toggleSidebarVisibility() {
        this.props.dispatch(toggleSidebarVisibility());
    }

    getMenu() {
        if (this.props.login && this.props.login.name) {
            return adminMenu;
        }
        else {
            return userMenu;
        }
    }

    render() {

        const style = {
            width: this.props.width,
            left: -this.props.width - 15
        };
        if (this.props.isOpen) {
            style.transform = `translatex(${this.props.width + 15}px)`;
        }

        return (
      <section
        style={style}
        className="sidemenu height-3">

        <div className="wrapper">
          <AppLogo
            displayMenuButton
            onClick={this.toggleSidebarVisibility.bind(this)} />
        </div>

        <Profile login={this.props.login} />

        <SidebarMenu menu={this.getMenu.call(this)} />

      </section>
    );
    }

}

Sidebar.propTypes = {
    login: PropTypes.object,
    role: PropTypes.string,
    width: PropTypes.number,
    isOpen: PropTypes.bool,
    dispatch: PropTypes.func
};

export default Sidebar;
