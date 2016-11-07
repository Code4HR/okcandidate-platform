import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'

class Admin extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section>
        <Header user={this.props.user} />
        <pre>OKCandidate Admin Panel</pre>
      </section>
    )

  }

}

Admin.propTypes = {
  user: PropTypes.object
}

export default Admin
