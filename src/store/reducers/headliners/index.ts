import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from '../../actions/consts'
import {HeadlinerActionResult } from '../../actions/headliners/types'
import { HeadlinersStoreStateInterface } from '../types'

import { appendHeadliners } from './supportMethods'

const INITIAL_STATE: HeadlinersStoreStateInterface = {
  totalResults: 0,
  headliners: null
}

const headliners = (
  state: HeadlinersStoreStateInterface = INITIAL_STATE,
  { type, payload}: HeadlinerActionResult
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

export default headliners
