import { combineReducers } from 'redux';
import pickSurvey from './reducers/pick-survey-reducer';
import survey from './reducers/survey-reducer';
import category from './reducers/category-reducer';
import ui from './reducers/ui-reducer';
import login from './reducers/login-reducer';
import result from './reducers/result-reducer';
import lastAction from './reducers/last-action-reducer';

module.exports = combineReducers({
    pickSurvey,
    survey,
    category,
    ui,
    login,
    result,
    lastAction
});
