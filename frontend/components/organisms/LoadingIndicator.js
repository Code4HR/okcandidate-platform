import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconMessage from './../molecules/IconMessage';

class LoadingIndicator extends Component {
    render() {
        return (
            <div className="loading-indicator">
                <IconMessage
                    icon="cached"
                    message={this.props.message} />
            </div>
        );
    }
}

LoadingIndicator.propTypes = {
    message: PropTypes.string
};

export default LoadingIndicator;
