import React, { PropTypes, Component } from 'react';

class Profile extends Component {

    render() {

        return (
      <section className="app-profile">
        { (() => {
            if (this.props.login && this.props.login.name) {
                return (
                  <span>
                    Logged in as: {this.props.login.name}.
                    <a href="/logout">Logout</a>
                  </span>
                );
            }
            else {
                return <a href="/login">Login</a>;
            }
        })()
        }
      </section >
    );

    }

}

Profile.propTypes = {
    login: PropTypes.object
};

export default Profile;
