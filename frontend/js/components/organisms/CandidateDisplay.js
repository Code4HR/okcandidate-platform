import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CandidateDisplay extends Component {

    render() {
        return (
      <div className="candidate-display">
        <div className="circle candidate-image">
          <img className="candidate-picture" src={this.props.picture ? this.props.picture : '/dist/images/default-user.png'} />
        </div>
        <div className="circle candidate-rating">
          {this.props.matchRate.toString() + '%'}
        </div>
      </div>
    );
    }

}

CandidateDisplay.propTypes = {
  picture: PropTypes.string,
    matchRate: PropTypes.number
};

export default CandidateDisplay;
