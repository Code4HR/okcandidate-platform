import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import LoginForm from './../ecosystems/LoginForm'

class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section>
        <div className="container">
          <div className="six columns">
            <div className="card">
              <LoginForm error={this.props.error} />
            </div>
          </div>
        </div>
      </section>
    )

  }

}

Login.propTypes = {
  error: PropTypes.string,
  user: PropTypes.object
}

export default Login
