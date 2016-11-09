import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import Header from './../ecosystems/Header'
import Sidebar from './../ecosystems/Sidebar'
import Card from './../atoms/Card'

class Admin extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Header
          dispatch={this.props.dispatch}
          user={this.props.user} />

        <Sidebar 
          role="admin"
          dispatch={this.props.dispatch}
          width={300} 
          isOpen={this.props.ui.sidebarVisibility} />

        <div className="container">
          <div className="twelve columns">
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
  admin: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    admin: state.admin,
    ui: state.ui
  })
)(Admin)
