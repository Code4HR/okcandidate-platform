import React, { PropTypes, Component } from 'react'

class Header extends Component {

  render() {

    return (
      <header>
        <h1>OkCandidate</h1>

        {
          this.props.user && this.props.user.name &&
          <span>Logged in as {this.props.user.name}. <a href="/logout">Logout</a></span>
        }

      </header>
    )

  }

}

Header.propTypes = {
  user: PropTypes.object
}

export default Header
