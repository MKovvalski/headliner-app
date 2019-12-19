import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from '../actions/consts'
import {ActionResult, PayloadInterface} from '../actions/types'
import { StoreStateInterface } from './types'

const INITIAL_STATE: StoreStateInterface = {
  totalResults: 0,
  headliners: null
}

const appendHeadliners = (
  state: StoreStateInterface,
  payload: PayloadInterface
): StoreStateInterface => {
  return {
    totalResults: payload.totalResults,
    headliners: [...state.headliners, ...payload.headliners]
  }
}

const headlinersList = (
  state: StoreStateInterface = INITIAL_STATE,
  { type, payload}: ActionResult
) => {
  switch (type) {
    case GET_HEADLINERS:
      return payload
    case APPEND_HEADLINERS:
      return appendHeadliners(state, payload)
    case REFRESH_HEADLINERS:
      return payload
  }

  return {}
}

export default headlinersList
