import React, { PropTypes, Component } from 'react';

import { Link } from 'react-router';

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
