'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CandidateMatchCategory extends Component {
    render() {
        return (
            <div className="candidate-match-category">
                <div className="match-rate">
                    {this.props.matchRate}
                </div>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
            </div>
        );
    }
}

CandidateMatchCategory.propTypes = {
    matchRate: PropTypes.number,
    categoryName: PropTypes.string
};

export default CandidateMatchCategory;
