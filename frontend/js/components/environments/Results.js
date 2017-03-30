'use strict';

import React, { PropTypes, Component } from 'react';
import Match from './../ecosystems/Match';

class Results extends Component {
    render () {
        return (
            <article>
                <pre>Results Page</pre>
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
            </article>
        );
    }
}

Results.propTypes = {};

module.exports = Results;
