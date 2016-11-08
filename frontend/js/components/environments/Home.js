import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section>
        <Header user={this.props.user}/>
        <div className="container">
          <div className="six columns">
            <div className="card">
              <pre>OKCandidate Home Screen</pre>
            </div>
          </div>
        </div>
      </section>
    )

  }

}

Home.propTypes = {
  user: PropTypes.object
}

export default Home
