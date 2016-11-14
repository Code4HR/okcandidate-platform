import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'

import Card from './../atoms/Card'

class SurveyManager extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="container">
        <div className="twelve columns">
          <Card>
            <pre>Survey Manager</pre>
          </Card>
        </div>
      </section>
    )

  }

}

SurveyManager.propTypes = {
  admin: PropTypes.object,
  user: PropTypes.object,
  ui: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(
  state => ({
    admin: state.admin
  })
)(SurveyManager)
