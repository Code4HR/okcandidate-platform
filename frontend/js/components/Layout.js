import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

    getSocialMediaMetaTags() {

        const social = this.props.state.social;
        if (!social) {
            return (<div></div>);
        }

        return [
            { name: 'description', content: social.description },
            { itemProp: 'name', content: social.siteName },
            { itemProp: 'description', content: social.description },
            { itemProp: 'image', content: social.image },
            { name: 'twitter:card', content: social.siteName },
            { name: 'twitter:site', content: this.props.url },
            { name: 'twitter:title', content: social.siteName },
            { name: 'twitter:description', content: social.description },
            { name: 'twitter:creator', content: social.creator },
            { name: 'twitter:image', content: social.image },
            { property: 'og:title', content: social.siteName },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: social.url },
            { property: 'og:image', content: social.image },
            { property: 'og:description', content: social.description },
            { property: 'og:site_name', content: social.siteName }
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
    host: PropTypes.string,
    state: PropTypes.object,
    children: PropTypes.string,
    store: PropTypes.object
};

export default Layout;
