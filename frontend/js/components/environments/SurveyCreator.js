import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SurveyCreator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <section className="container">
            <div className="twelve columns">
              <h1>Survey Creator</h1>
              { this.props.children }
            </div>
          </section>
        );
    }
}

SurveyCreator.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func,
    children: PropTypes.any
};

export default connect(
  state => ({
      admin: state.admin
  })
)(SurveyCreator);
