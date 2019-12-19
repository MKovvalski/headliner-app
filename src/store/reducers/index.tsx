import { combineReducers } from 'redux'

import toReadList from './toReadList'
import headlinersList from './headlinersList'

export default combineReducers({
  headliners: headlinersList,
  toRead: toReadList
})
