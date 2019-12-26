import { combineReducers } from 'redux'
import headliners from './headliners'
import toReads from './toReads'
import { RootStore } from '../types'

export default combineReducers<RootStore>({
  headliners,
  toReads
})
