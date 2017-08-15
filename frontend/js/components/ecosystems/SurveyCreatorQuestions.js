import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';


class SurveyCreatorQuestions extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <pre>Survey Creator Questions</pre>
            </Card>
        );
    }

}

SurveyCreatorQuestions.propTypes = {
    questions: PropTypes.array
};

export default SurveyCreatorQuestions;
