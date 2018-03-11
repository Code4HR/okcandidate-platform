import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CandidateDisplay extends Component {

    render() {
        return (
      <div className="candidate-display">
        <div className="circle candidate-image">
          <img src={this.props.image} />
        </div>
        <div className="circle candidate-rating">
          {this.props.matchRate.toString() + '%'}
        </div>
      </div>
    );
    }

}

CandidateDisplay.propTypes = {
    image: PropTypes.string,
    matchRate: PropTypes.number
};

export default CandidateDisplay;
