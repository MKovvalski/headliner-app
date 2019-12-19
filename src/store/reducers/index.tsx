import { combineReducers } from 'redux'

import headliners from './headliners'
import toReads from './toReads'

export default combineReducers({
  headliners,
  toReads
})
