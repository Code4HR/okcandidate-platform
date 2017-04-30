import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';

import SearchBox from './../organisms/SearchBox'

class SurveyGeneral extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Card>
            <div className="">
                <pre>OKCandidate General</pre>
                <label>Survey Name</label>
                <div className="float-right"> <label>What should the survey's nickname be?</label></div>
                <input type="text" for="survey name"/>
                <label>Survey City</label>
                <div className="float-right"> <label>What city(or cities) should the survey be active in?</label></div>
                <SearchBox></SearchBox>
                <label>Start Date</label>
                <input className="datepicker" type="date" />
                <div className="float-right"> <label>What day and time should the survey begin and end?</label></div>
                <label>End Date</label>
                <input className="datepicker" type="date"/>
            </div>
          </Card>
    );
    }

}

SurveyGeneral.propTypes = {
    surveyName: PropTypes.string,
    surveyCities: PropTypes.array,
    surveyStart: PropTypes.number,
    surveyEnd: PropTypes.number,
};

export default SurveyGeneral;
