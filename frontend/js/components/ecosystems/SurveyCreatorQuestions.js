import React, { PropTypes, Component } from 'react';
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
