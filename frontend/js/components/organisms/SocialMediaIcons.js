'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './../molecules/IconButton';

class SocialMediaIcons extends Component {

    shareOnFacebook() {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }

    shareOnTwitter() {
        let message = this.props.social.description;
        if (message.length >= 144) {
            message = this.props.social.shortDescription;
        }
        const url = `https://twitter.com/intent/tweet?text=${message}&source=webclient`;
        window.open(url, '_blank');
    }

    render() {
        return (
            <section data-primary={this.props.primary} className="social-media-sharing">
                <IconButton
                    square
                    onClick={this.shareOnFacebook.bind(this)}>
                    <span className="icon-facebook2"></span>
                </IconButton>
                <IconButton
                    square
                    onClick={this.shareOnTwitter.bind(this)}>
                    <span className="icon-twitter"></span>
                </IconButton>
                <IconButton
                    square>
                    <span className="icon-link"></span>
                </IconButton>
                <label>Share</label>
            </section>
        );
    }
}

SocialMediaIcons.propTypes = {
    social: PropTypes.object,
    primary: PropTypes.bool
};

export default SocialMediaIcons;
