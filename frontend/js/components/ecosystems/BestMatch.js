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
                <p className="match-text">{this.props.matchText}</p>
                <CandidateDisplay
                  matchRate={this.props.matchRate} />
                <div className="best-match-info">
                  <p className="candidate-name">{this.props.name}</p>
                  <p className="candidate-office">{this.props.party}</p>
                </div>
                <div className="learn-more">
                  Learn More
                  <Icon children="keyboard_arrow_right" />
                </div>
            </Card>
        );
    }
}

BestMatch.propTypes = {
    matchText: PropTypes.string,
    name: PropTypes.string,
    office: PropTypes.string,
    party: PropTypes.string,
    matchRate: PropTypes.number
};

module.exports = BestMatch;
