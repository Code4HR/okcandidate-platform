import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

class UserManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <section className="container">
        <div className="twelve columns">
          <Card>
            <pre>User Manager</pre>
          </Card>
        </div>
      </section>
    );

    }

}

UserManager.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(UserManager);
