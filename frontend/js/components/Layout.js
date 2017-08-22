import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

    titlecase(str) {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    candidateMatchString(matches) {
        if (matches.length === 1) {
            return matches[0].name;
        }
        if (matches.length === 2) {
            return `${matches[0].name} and ${matches[1].name}`;
        }
        if (matches.length === 3) {
            return `${matches[0].name}, ${matches[1].name}, and ${matches[2].name}`;
        }
    }

    getSocialMediaMetaTags() {

        const bestMatches = this.props.state.result.bestMatches;
        const baseUrl = 'http://okcandiate.code4hr.org';
        const siteName = 'OKCandidate';
        const url = baseUrl + this.props.url;
        const creator = '@code4hr';
        let image;
        let description;

        if (url.includes('/results/')) {
            if (!bestMatches.length) {
                image = baseUrl + '/dist/images/ballot-box.png';
                description = 'Find out which candidates for local office are a match for you!';
            }

            if (bestMatches.length >= 1) {
                // TODO, where do candidate images live?
                image = baseUrl + '/dist/images/ballot-box.png';
                description = `I matched with ${this.candidateMatchString(bestMatches)}. See what candidates for local office are a match for you!`;
            }
        }

        return [
            { name: 'description', content: description },
            { itemProp: 'name', content: siteName },
            { itemProp: 'description', content: description },
            { itemProp: 'image', content: image },
            { name: 'twitter:card', content: siteName },
            { name: 'twitter:site', content: url },
            { name: 'twitter:title', content: siteName },
            { name: 'twitter:description', content: description },
            { name: 'twitter:creator', content: creator },
            { name: 'twitter:image', content: image },
            { property: 'og:title', content: siteName },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: url },
            { property: 'og:image', content: image },
            { property: 'og:description', content: description },
            { property: 'og:site_name', content: siteName }
        ];
    }

    render() {

        const socialMediaTags = this.getSocialMediaMetaTags();

        return (
            <html>
                <head>
                    <title>OKCandidate</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {
                        socialMediaTags.map((tag, index) => {
                            return (
                                <meta data-doc-meta="true" key={index} {...tag} />
                            );
                        })
                    }
                    <link rel="stylesheet" href="/dist/styles/style.css" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                </head>

                <body>
                    <div id="app-mount" dangerouslySetInnerHTML={{ __html: this.props.children }} />

                    <script id="app-state"
                        dangerouslySetInnerHTML={{
                            __html: 'window.state = ' + JSON.stringify(this.props.state)
                        }}></script>

                    {
                        this.props.bundle === 'client' &&
                        <script src="/dist/client-bundle.js"></script>
                    }

                    {
                        this.props.bundle === 'admin' &&
                        <script src="/dist/admin-bundle.js"></script>
                    }
                </body>
            </html>
        );
    }

}

Layout.propTypes = {
    bundle: PropTypes.string,
    url: PropTypes.string,
    state: PropTypes.object,
    children: PropTypes.string,
    store: PropTypes.object
};

export default Layout;
