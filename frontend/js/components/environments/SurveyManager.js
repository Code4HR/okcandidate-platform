import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

class SurveyManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <pre>Survey Manager</pre>
                </Card>
            </div>
        );
    }

}

SurveyManager.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(SurveyManager);
