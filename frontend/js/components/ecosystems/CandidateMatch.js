'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';
import CandidateDisplay from './../organisms/CandidateDisplay';
import SocialMediaIcons from './../organisms/SocialMediaIcons';
import CandidateMatchCategory from './../molecules/CandidateMatchCategory';
import Vr from './../atoms/Vr';
import IconButton from './../molecules/IconButton';

class CandidateMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({
            expanded: false
        });
    }

    toggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {

        const detailStyle = {
            height: this.state.expanded ? 'auto' : 0
        };

        return (
            <Card className="candidate-match">
                <div className="candidate-preview">
                    <CandidateDisplay
                        matchRate={this.props.matchRate} />
                    <div className="candidate-info">
                        <h2 className="candidate-name">{this.props.name}</h2>
                        <div className="candidate-party">{this.props.party}</div>
                        <IconButton
                            icon="keyboard_arrow_down"
                            label="Learn More"
                            onClick={this.toggleExpanded.bind(this)}>
                        </IconButton>
                    </div>
                </div>

                <div
                    style={detailStyle}
                    className="candidate-detail">
                    <div className="candidate-detail-links">
                        <SocialMediaIcons />
                        <Vr height={36} />
                        <a
                            href="#"
                            className="button" >Learn more about {this.props.name}</a>
                    </div>

                    <h2>On the issues...</h2>
                    <div className="candidate-detail-categories">

                        {
                            this.props.categories.map((cat, index) => {
                                return (
                                    <CandidateMatchCategory
                                        key={cat.id}
                                        categoryName={cat.categoryName}
                                        matchRate={cat.matchRate} />
                                );
                            })
                        }

                    </div>
                </div>
            </Card>
        );
    }
}

CandidateMatch.propTypes = {
    name: PropTypes.string,
    office: PropTypes.string,
    party: PropTypes.string,
    categories: PropTypes.array,
    matchRate: PropTypes.number
};

module.exports = CandidateMatch;
