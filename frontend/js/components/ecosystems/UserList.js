import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserListItem from './../organisms/UserListItem';

import {
  toggleUserManagerUserEditable
} from './../../redux/actions/admin-actions';

class UserList extends Component {

    constructor(props) {
        super(props);
    }

    toggleEditable(id) {
        this.props.dispatch(toggleUserManagerUserEditable(id));
    }

    render() {
        return (
      <div>
        <div className="row">
          <div className="two columns">
            <strong>Edit</strong>
          </div>
          <div className="four columns">
            <strong>Display Name</strong>
          </div>
          <div className="four columns">
            <strong>Email</strong>
          </div>
          <div className="two columns">
            <strong>Delete</strong>
          </div>
        </div>
        {
          this.props.users.map((userItem, index) => {
              return (
              <UserListItem
                key={index}
                id={userItem.id}
                name={userItem.name}
                emailAddress={userItem.emailAddress}
                toggleEditable={this.toggleEditable.bind(this)}
              />
            );
          })
        }
      </div>
    );
    }
}

UserList.propTypes = {
    users: PropTypes.array,
    dispatch: PropTypes.func
};

export default UserList;
