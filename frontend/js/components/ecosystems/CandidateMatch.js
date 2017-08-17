'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';
import CandidateDisplay from './../organisms/CandidateDisplay';
import Icon from './../atoms/Icon';

class BestMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{'textAlign': 'center'}}>
                <CandidateDisplay
                  matchRate={this.props.matchRate} />
                <div className="match-info">
                  <p className="candidate-name">{this.props.name}</p>
                  <p className="candidate-party">{this.props.party}</p>
                  <button key="1">More Info <Icon children="keyboard_arrow_down" /></button>
                </div>
            </Card>
        );
    }
}

BestMatch.propTypes = {
    name: PropTypes.string,
    office: PropTypes.string,
    party: PropTypes.string,
    matchRate: PropTypes.number
};

module.exports = BestMatch;
