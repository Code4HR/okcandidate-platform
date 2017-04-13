import React, { PropTypes, Component } from 'react'

import Card from './../atoms/Card'

class NewUserForm extends Component {

  render() {
    return (
      <section className="container">
        <Card>
          <pre>New User</pre>
          <form
            action="/api/v1/user"
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
                placeholder="A. User" />

              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                name="emailAddress"
                placeholder="name@domain.com" />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="hunter2" />

              <button type="submit">Create</button>

            </fieldset>

          </form>
        </Card>
      </section>
    )
  }

}

NewUserForm.propTypes = {
  error: PropTypes.string
}

export default NewUserForm
