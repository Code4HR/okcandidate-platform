import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Card from './../atoms/Card';
import LocationForm from './../ecosystems/LocationForm';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div className="twelve columns">
            <Card>
              <pre>OKCandidate Home Screen</pre>
              <LocationForm
                addressError={this.props.pickSurvey.addressError}
                status={this.props.pickSurvey.status}
                dispatch={this.props.dispatch} />
            </Card>
          </div>
    );

    }

}

Home.propTypes = {
    pickSurvey: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      pickSurvey: state.pickSurvey,
      ui: state.ui
  })
)(Home);
