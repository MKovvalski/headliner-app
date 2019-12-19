import {
  GET_TO_READ_LIST,
  ADD_HEADLINER_TO_LIST,
  CHANGE_HEADLINER_STATUS,
  REMOVE_HEADLINER_FROM_LIST
} from '../../actions/consts'

import {ToReadsReducerAction } from '../../actions/toReads/types'

import { ToReadsStoreStateInterface } from '../types'

import {
  addHeadliner,
  changeHeadlinerStatus,
  removeHeadlinerFromList
} from './supportMethods'

const INITIAL_STATE: ToReadsStoreStateInterface = {
  totalResults: 0,
  beenReads: 0,
  toDeletes: 0,
  toReads: [],
}

const toReads = (
  state: ToReadsStoreStateInterface = INITIAL_STATE,
  { type, payload}: ToReadsReducerAction
) => {
  switch (type) {
    case GET_TO_READ_LIST:
      return payload

    case ADD_HEADLINER_TO_LIST:
      return addHeadliner(state, payload)

    case CHANGE_HEADLINER_STATUS:
      return changeHeadlinerStatus(state, payload)

    case REMOVE_HEADLINER_FROM_LIST:
      return removeHeadlinerFromList(state, payload)

  }
  return state
}

export default toReads
