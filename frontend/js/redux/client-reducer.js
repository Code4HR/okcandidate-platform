import { combineReducers } from 'redux';
import survey from './reducers/survey-reducer';
import category from './reducers/category-reducer';
import ui from './reducers/ui-reducer';
import login from './reducers/login-reducer';
import result from './reducers/result-reducer';

module.exports = combineReducers({
    survey,
    category,
    ui,
    login,
    result
});
