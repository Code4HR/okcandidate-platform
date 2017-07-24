import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Card from './../atoms/Card';
import TextField from './../organisms/TextField';
import RadioButtons from './../organisms/RadioButtons';
import Checkbox from './../molecules/Checkbox';
import Tray from './../molecules/Tray';
import Icon from './../atoms/Icon';

import {
    fetchQuestionTypes,
    setSurveyName,
    setSurveyStartDate,
    setSurveyEndDate,
    selectQuestionType,
    toggleRegionLimit,
    submitSurveyGeneral,
    updateSurveyGeneralInfo,
    fetchSurveyGeneralInfo
} from './../../redux/actions/survey-creator-general-actions';

import {
    gotoRoute
} from './../../redux/actions/router-actions';

class SurveyCreatorGeneral extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchQuestionTypes());
        if (this.props.params.id) {
            this.props.dispatch(fetchSurveyGeneralInfo(this.props.params.id));
        }
    }

    setSurveyName(event) {
        this.props.dispatch(setSurveyName(event.target.value));
    }

    setStartDate(event) {
        this.props.dispatch(setSurveyStartDate(event.target.value));
    }

    setEndDate(event) {
        this.props.dispatch(setSurveyEndDate(event.target.value));
    }

    setSelectedType(index) {
        this.props.dispatch(selectQuestionType(index));
    }

    toggleRegionLimit(event) {
        this.props.dispatch(toggleRegionLimit());
    }

    submitSurveyGeneral() {
        if (this.props.general.id) {
            return this.props.dispatch(updateSurveyGeneralInfo(this.props.general));
        }
        return this.props.dispatch(submitSurveyGeneral(this.props.general));
    }

    gotoNextPage() {
        gotoRoute(`/admin/survey/${this.props.params.id}/offices`);
    }

    render() {

        return (
            <Card>
                <h2>General</h2>
                <TextField
                    onChange={this.setSurveyName.bind(this)}
                    value={this.props.general.name}
                    name="survey-name"
                    label="Survey Name"
                    help="A memorable name for the survey"
                    type="text" />

                <div className="text-field-row">
                    <TextField
                        onChange={this.setStartDate.bind(this)}
                        value={this.props.general.startDate}
                        name="start-date"
                        label="Start Date"
                        help="mm/dd/yyyy"
                        type="text" />

                    <TextField
                        onChange={this.setEndDate.bind(this)}
                        value={this.props.general.endDate}
                        name="end-date"
                        label="End Date"
                        help="mm/dd/yyyy"
                        type="text" />
                </div>

                <RadioButtons
                    onChange={this.setSelectedType.bind(this)}
                    selected={this.props.general.questionTypeId}
                    options={this.props.general.questionTypes}
                    help="What kind of questions will voters and candidates see?"
                    name="Question Type" />

                <Checkbox
                    onChange={this.toggleRegionLimit.bind(this)}
                    checked={this.props.general.regionLimit}
                    help="Should voters in different districts see different candidates?"
                    label="Limit by region?"/>

                <Tray>
                    <button
                        onClick={this.submitSurveyGeneral.bind(this)}
                        className="submit">
                        { this.props.general.id && 'Update' || 'Submit' }
                    </button>
                    { this.props.general.id &&
                        <button
                            onClick={this.gotoNextPage.bind(this)}>
                                Offices <Icon>keyboard_arrow_right</Icon>
                        </button>
                    }
                </Tray>
            </Card>
        );
    }

}

SurveyCreatorGeneral.propTypes = {
    general: PropTypes.object,
    dispatch: PropTypes.func,
    params: PropTypes.object
};

export default connect(
  state => ({
      general: state.surveyCreator.general
  })
)(SurveyCreatorGeneral);
