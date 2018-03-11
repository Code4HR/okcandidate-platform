import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'next/link';

import Icon from './../atoms/Icon';

class MenuListItem extends Component {

    render() {
        return (
      <li>
        <Link to={this.props.href}>
          {
            this.props.icon &&
            <Icon>{this.props.icon}</Icon>
          }
          <span>{this.props.label}</span>
        </Link>
      </li>
    );
    }

}

MenuListItem.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
};

export default MenuListItem;
