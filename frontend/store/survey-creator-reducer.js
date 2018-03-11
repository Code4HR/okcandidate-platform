import { combineReducers } from 'redux';

import surveyCreatorGeneral from './reducers/survey-creator-general-reducer';
import surveyCreatorOffices from './reducers/survey-creator-offices-reducer';
import surveyCreatorCandidates from './reducers/survey-creator-candidates-reducer';
import surveyCreatorQuestions from './reducers/survey-creator-questions-reducer';

export default combineReducers({
    general: surveyCreatorGeneral,
    offices: surveyCreatorOffices,
    candidates: surveyCreatorCandidates,
    questions: surveyCreatorQuestions
});
