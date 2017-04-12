import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from './../atoms/Card';
import SurveyGeneral from '../ecosystems/SurveyGeneral'
import SurveyOffices from '../ecosystems/SurveyOffices'

class SurveyCreator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <section className="container">
        <div className="twelve columns">
          <Card>
            <pre>Survey Creator</pre>
          </Card>
          <SurveyGeneral></SurveyGeneral>
          <SurveyOffices></SurveyOffices>
        </div>
      </section>
    );

    }

}

SurveyCreator.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(SurveyCreator);
