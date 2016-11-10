import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import Header from './../ecosystems/Header'
import Sidebar from './../ecosystems/Sidebar'
import Card from './../atoms/Card'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section>
        <Header 
          dispatch={this.props.dispatch}
          user={this.props.user}/>

        <Sidebar 
          role="user"
          dispatch={this.props.dispatch}
          width={300} 
          isOpen={this.props.ui.sidebarVisibility} />

        <div className="container">
          <div className="twelve columns">
            <Card>
              <pre>OKCandidate Home Screen</pre>
            </Card>
          </div>
        </div>

      </section>
    )

  }

}

Home.propTypes = {
  user: PropTypes.object
}

export default connect(
  state => ({
    survey: state.survey,
    ui: state.ui
  })
)(Home)
