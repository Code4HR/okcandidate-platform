import React, { PropTypes, Component } from 'react';
import Card from './../atoms/Card';

import SearchBox from './../organisms/SearchBox';
import Icon from './../atoms/Icon';

class SurveyCreatorOffices extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <pre>Survey Creator Offices</pre>
            </Card>
        );
    }

}

SurveyCreatorOffices.propTypes = {
    offices: PropTypes.object
};

export default SurveyCreatorOffices;
