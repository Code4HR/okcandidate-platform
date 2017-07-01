import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';

import SearchBox from './../organisms/SearchBox';
import Icon from './../atoms/Icon';

class SurveyOffices extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Card>
            <div className="">
            <pre>OKCandidate Offices</pre>
            <label>Offices</label>
            <div className="float-right">
                <label>What offices do you want to include in the survey?</label>
            </div>
            {
                this.props.offices.map(office=><div className="office-wrapper">
                    <div><span>{office}</span>
                            <div className="office-actions">
                                <Icon>add</Icon>
                                <Icon>clear</Icon>
                            </div>
                    </div>
                </div>)
            }
            <SearchBox></SearchBox>
            </div>
        </Card>
    );
    }

}

SurveyOffices.propTypes = {
    offices: PropTypes.object
};

export default SurveyOffices;
