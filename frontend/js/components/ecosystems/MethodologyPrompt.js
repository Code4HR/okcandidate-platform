'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';

class MethodologyPrompt extends Component {
    render() {
        return (
            <Card
                title="Methodology"
                actions={
                    <button
                        className="primary">Learn More</button>
                }>
                How did we calculate these scores?
            </Card>
        );
    }
}

MethodologyPrompt.propTypes = {
    onClick: PropTypes.func
};

export default MethodologyPrompt;
