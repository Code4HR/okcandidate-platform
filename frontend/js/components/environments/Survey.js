'use strict';

import React, { PropTypes, Component } from 'react';
import SurveyCard from './../ecosystems/SurveyCard';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: [
                {},
                {},
                {}
            ]
        };
    }

    render() {
        return (
            <article>
                <pre>Survey Page</pre>
                {
                    this.state.survey.map((question, index) => {
                        return <SurveyCard key={index}/>;
                    })
                }
            </article>
        );
    }
}

Survey.propTypes = {};

module.exports = Survey;
