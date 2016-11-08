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
        <div className="container">
          <div className="six columns">
            <div className="card">
              <pre>OKCandidate Admin Panel</pre>
            </div>
          </div>
        </div>
      </section>
    )

  }

}

Admin.propTypes = {
  user: PropTypes.object
}

export default Admin
