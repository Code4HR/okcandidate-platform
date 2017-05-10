'use strict';

import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';
import CandidateDisplay from './../organisms/CandidateDisplay';
import Icon from './../atoms/Icon';

class OtherMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Card style={{'position': 'relative'}}>
            <CandidateDisplay
              matchRate={this.props.matchRate} />
            <div className="other-match-info">
              <p>
                <span className="candidate-name">{this.props.name}</span>
                <span className="candidate-office">{this.props.office}</span>
              </p>
            </div>
            <div className="other-match-arrow">
              <Icon children="keyboard_arrow_right" />
            </div>
          </Card>
        );
    }
}

OtherMatch.propTypes = {
    name: PropTypes.string,
    office: PropTypes.string,
    matchRate: PropTypes.number
};

module.exports = OtherMatch;
