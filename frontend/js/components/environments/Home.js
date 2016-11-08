import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import Card from './../atoms/Card'

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

export default Home
