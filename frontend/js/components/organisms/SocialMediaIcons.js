'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './../molecules/IconButton';

class SocialMediaSharing extends Component {
    getMessage() {
        const matches = this.props.matches;
        let message = '';
        if (this.props.matches.length === 2) {
            message += `I agree with ${matches[0].name} and ${matches[1].name} on ${matches[0].matchRate}% of the issues. `;
        }
        else if (this.props.matches.length === 3) {
            message += `I agree with ${matches[0].name}, ${matches[1].name}, and ${matches[2].name} on ${matches[0].matchRate}% of the issues. `;
        }
        else {
            message += `I agree with ${matches[0].name} on ${matches[0].matchRate}% of the issues. `;
        }
        message += `http://okcandidate.code4hr.org/results/${this.props.passPhrase}`;
        return encodeURIComponent(message);
    }

    shareOnFacebook() {
        const url = `http://okcandidate.code4hr.org/results/${this.props.passPhrase}`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }

    shareOnTwitter() {
        const message = this.getMessage();
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

SocialMediaSharing.propTypes = {
    matches: PropTypes.array,
    primary: PropTypes.bool,
    name: PropTypes.string,
    passPhrase: PropTypes.string
};

export default SocialMediaSharing;
