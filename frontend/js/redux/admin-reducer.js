import { combineReducers } from 'redux'
import admin from './reducers/admin-reducer.js'
import ui from './reducers/ui-reducer.js'

module.exports = combineReducers({
  admin,
  ui
})
