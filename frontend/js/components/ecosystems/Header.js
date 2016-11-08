import React, { PropTypes, Component } from 'react'

class Header extends Component {

  render() {

    return (
      <header className="app-header">
        <div className="container">
          <div className="three columns">
            <a href="/">
              <img className="app-logo" alt="OKCandidate" src="dist/images/okcandidate-logo.svg" />
            </a>
          </div>
          <div className="nine columns app-profile">
            {
              this.props.user && this.props.user.name &&
              <span>Logged in as {this.props.user.name}. <a href="/logout">Logout</a></span>
            }
          </div>
        </div>
      </header>
    )

  }

}

Header.propTypes = {
  user: PropTypes.object
}

export default Header
