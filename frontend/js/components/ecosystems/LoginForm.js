import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {

    render() {
        return (
      <form
        action="/login"
        method="POST">

        {
          this.props.error &&
          <label>{this.props.error}</label>
        }

        <fieldset>

          <legend>Login to Continue</legend>

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

          <button type="submit">Submit</button>

        </fieldset>

      </form>
    );
    }

}

LoginForm.propTypes = {
    error: PropTypes.string
};

export default LoginForm;
