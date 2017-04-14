import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

import {
  fetchUser
} from './../../redux/actions/admin-actions';

class DeleteUserForm extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchUser(this.props.params.id));
    }

    render() {

        const deleteId = this.props.admin.users.currentlyEditing;

        const user = deleteId ?
    this.props.admin.users.results.find(user => {
        return user.id === deleteId;
    }) :
    {};

        return (
      <section className="container">
        <Card>
          <pre>Delete User</pre>
          <form
            action={'/api/v1/user/delete/' + user.id}
            method="POST">

            {
              this.props.error &&
              <label>{this.props.error}</label>
            }

            <fieldset>

              <div className="confirm-dialog">Are you sure you want to delete {user.name}?</div>

              <button type="submit">Delete</button>
            </fieldset>

          </form>
        </Card>
      </section>
    );
    }

}

DeleteUserForm.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    emailAddress: PropTypes.string,
    error: PropTypes.string,
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    params: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(DeleteUserForm);
