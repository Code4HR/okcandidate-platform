import { combineReducers } from 'redux'
import survey from './reducers/survey-reducer.js'
import ui from './reducers/ui-reducer.js'
import login from './reducers/login-reducer'

module.exports = combineReducers({
  survey,
  ui,
  login
})
