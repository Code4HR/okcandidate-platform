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
        <Header user={this.props.user}/>
        <LoginForm error={this.props.error} />
      </section>
    )

  }

}

Login.propTypes = {
  error: PropTypes.string,
  user: PropTypes.object
}

export default Login
