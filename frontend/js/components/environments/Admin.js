import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';

import Card from './../atoms/Card';

class Admin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <pre>OKCandidate Admin Panel</pre>
                </Card>
            </div>
        );
    }

}

Admin.propTypes = {
    admin: PropTypes.object,
    user: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func
};

export default connect(
  state => ({
      admin: state.admin
  })
)(Admin);
