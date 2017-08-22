'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './../molecules/IconButton';

class SocialMediaSharing extends Component {
    render() {
        return (
            <section data-primary={this.props.primary} className="social-media-sharing">
                <IconButton square>
                    <span className="icon-facebook2"></span>
                </IconButton>
                <IconButton square>
                    <span className="icon-twitter"></span>
                </IconButton>
                <IconButton square>
                    <span className="icon-link"></span>
                </IconButton>
                <label>Share</label>
            </section>
        );
    }
}

SocialMediaSharing.propTypes = {
    primary: PropTypes.bool
};

export default SocialMediaSharing;
