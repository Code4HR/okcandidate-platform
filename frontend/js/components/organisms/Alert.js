import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './../molecules/IconButton';

const alertLevels = [
    'success',
    'warning',
    'danger'
];

class Alert extends Component {
    render() {
        let levelClass = 'info';
        if (alertLevels.includes(this.props.level)) {
            levelClass = this.props.level;
        }

        return (
            <div className={`alert ${levelClass}`}>
                <div className="alert-message">
                    { this.props.message }
                </div>
                {
                    this.props.onDismiss &&
                    <IconButton
                        onClick={this.props.onDismiss}
                        icon="close" />
                }
            </div>
        );
    }
}

Alert.propTypes = {
    level: PropTypes.string,
    message: PropTypes.string,
    onDismiss: PropTypes.func
};

export default Alert;
