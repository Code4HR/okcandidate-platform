import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';


class SurveyQuestions extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Card>
            <div className="">
            <pre>OKCandidate Questions</pre>
            <label>Question</label>
            <div className="float-right">
                <label>What offices do you want to include in the survey?</label>
            </div>
            {
                this.props.questions.map(office=><div className="survey-question">{office}</div>)
            }
            <input type="text" />

            </div>
        </Card>
    );
    }

}

SurveyQuestions.propTypes = {
    questions: PropTypes.array
};

export default SurveyQuestions;
