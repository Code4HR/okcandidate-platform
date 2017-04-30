import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router';

import Icon from './../atoms/Icon';
import Card from './../atoms/Card';
import UserList from './../ecosystems/UserList';

import {
  fetchAllUsers
} from './../../redux/actions/admin-actions';

class UserManager extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllUsers());
    }

    render() {

        const users = this.props.admin.users;

        return (
      <section className="container">
          <Card>
            <pre>User Manager</pre>
            <Link to="admin/user/new">
              <Icon children="add" />
            </Link>
            {

              users.isFetching ?
                <div><Icon children="auto-renew" />Loading Users</div> :
                <UserList
                  users={users.results}
                  dispatch={this.props.dispatch}
                />
            }
          </Card>
      </section>
    );

    }

}

UserManager.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(UserManager);
