'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './../atoms/Modal';

class MethodologyModal extends Component {
    render() {
        return (
            <Modal
                active={this.props.active}
                title="Methodology"
                actions={
                    <button
                        className="primary"
                        onClick={this.props.onClick}>
                        Close
                    </button>
                }>
                <pre>Methodology info goes here</pre>
            </Modal>
        );
    }
}

MethodologyModal.propTypes = {
    active: PropTypes.bool
};

export default MethodologyModal;
