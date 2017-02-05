import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import Card from './../atoms/Card'

import {
  fetchUser
} from './../../redux/actions/admin-actions'

class EditUserForm extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.params.id))
  }

  render() {

    const editId = this.props.admin.users.currentlyEditing

    const user = editId ?
    this.props.admin.users.results.find(user => {
      return user.id === editId
    }) :
    {}

    return (
      <section className="container">
        <Card>
          <pre>Edit User</pre>
          <form
            action="/api/v1/user/edit"
            method="POST">

            {
              this.props.error &&
              <label>{this.props.error}</label>
            }

            <fieldset>

              <input
                type="hidden"
                name="id"
                value={user.id ? user.id : 0} />

              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={user.name ? user.name : ""} />

              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                name="emailAddress"
                value={user.emailAddress ? user.emailAddress : ""} />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="hunter2" />

              <button type="submit">Update</button>

            </fieldset>

          </form>
        </Card>
      </section>
    )
  }

}

EditUserForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  emailAddress: PropTypes.string,
  error: PropTypes.string,
  admin: PropTypes.object,
  user: PropTypes.object,
  ui: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    admin: state.admin
  })
)(EditUserForm)
