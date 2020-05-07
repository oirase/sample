import { combineReducers } from 'redux'
import data from './data'
import error from './error'

export default combineReducers({
  data,
  error
})