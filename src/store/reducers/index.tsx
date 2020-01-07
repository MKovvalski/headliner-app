import { combineReducers } from 'redux'
import headliners from './headliners'
import toReads from './toReads'
import search from './search'
import { RootStore } from '../types'

export default combineReducers<RootStore>({
  headliners,
  toReads,
  search
})
