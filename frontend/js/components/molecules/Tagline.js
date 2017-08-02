'use strict';

import React, { Component } from 'react';

class Tagline extends Component {
    render() {
        return (
            <div className="tagline">
                <div>Made with <span className="heart">♥</span> by Code for Hampton Roads.</div>
                <div><a href="#">Leave Feedback</a> <a href="#">Source Code</a></div>
            </div>
        );
    }
}

export default Tagline;
