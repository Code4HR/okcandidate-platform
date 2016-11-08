import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import Card from './../atoms/Card'

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
            <Card>
              <pre>OKCandidate Admin Panel</pre>
            </Card>
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
