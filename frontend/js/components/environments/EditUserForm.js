import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import Card from './../atoms/Card'

import {
  fetchUser
} from './../../redux/actions/admin-actions'

class EditUserForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      emailAddress: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({ [name]: value })
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.params.id))
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps)
    this.setState(newProps.admin.editUser)
  }

  render() {
    return (
      <section className="container">
        <Card>
          <pre>Edit User</pre>
          <form
            action={"/api/v1/user/edit/" + this.props.params.id}
            method="POST">

            {
              this.props.error &&
              <label>{this.props.error}</label>
            }

            <fieldset>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange} />

              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange} />

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
