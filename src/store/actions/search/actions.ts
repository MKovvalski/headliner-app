import { ENTRY_Sources, OUTPUT_Sources } from './types'

import {
  GET_SOURCES,
  SET_SOURCES
} from '../consts'

export const getSources = (payload: ENTRY_Sources): OUTPUT_Sources => ({
  type: GET_SOURCES,
  payload
})
