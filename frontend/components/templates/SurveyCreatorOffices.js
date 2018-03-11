import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './../atoms/Card';

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
