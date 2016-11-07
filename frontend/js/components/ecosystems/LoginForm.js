import React, { PropTypes, Component } from 'react'

class LoginForm extends Component {

  render() {
    return (
      <form
        action="/login"
        method="POST">
        <fieldset>

          {
            this.props.error &&
            <label>{this.props.error}</label>
          }

          <legend>Login to continue</legend>
          <label htmlFor="emailAddress">Email Address</label>
          <input name="emailAddress" />

          <label htmlFor="password">Password</label>
          <input name="password" />
        </fieldset>

        <button type="submit">Submit</button>

      </form>
    )
  }

}

LoginForm.propTypes = {
  error: PropTypes.string
}

export default LoginForm
