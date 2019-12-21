import {
  GET_TO_READ_LIST,
  ADD_HEADLINER_TO_LIST,
  CHANGE_HEADLINER_STATUS,
  REMOVE_HEADLINER_FROM_LIST
} from '../../actions/consts'
import { ENTRY_toReadsStore } from '../types'
import {
  addHeadliner,
  modifyHeadlinerStatus,
  removeHeadlinerFromList
} from './reducerMethods'

const INITIAL_STATE: ENTRY_toReadsStore = {
  totalResults: 0,
  beenReads: 0,
  toDeletes: 0,
  toReads: [],
}

const toReads = (
  state: ENTRY_toReadsStore = INITIAL_STATE,
  { type, payload }: any
): ENTRY_toReadsStore  => {
  switch (type) {
    case GET_TO_READ_LIST:
      return payload

    case ADD_HEADLINER_TO_LIST:
      return addHeadliner(state, payload)

    case CHANGE_HEADLINER_STATUS:
      return modifyHeadlinerStatus(state, payload)

    case REMOVE_HEADLINER_FROM_LIST:
      return removeHeadlinerFromList(state, payload)

  }

  return state
}

export default toReads
