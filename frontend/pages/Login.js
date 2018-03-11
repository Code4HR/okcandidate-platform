import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './../ecosystems/LoginForm';

class Login extends Component {

    constructor(props) {
        super(props);
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
    );

    }

}

Login.propTypes = {
    error: PropTypes.string,
    user: PropTypes.object
};

export default Login;
