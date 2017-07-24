import { combineReducers } from 'redux';
import admin from './reducers/admin-reducer';
import ui from './reducers/ui-reducer';
import login from './reducers/login-reducer';
import surveyCreator from './survey-creator-reducer';

module.exports = combineReducers({
    admin,
    ui,
    login,
    surveyCreator
});
