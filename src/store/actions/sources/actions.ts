import { ENTRY_ChosenSources, OUTPUT_Source } from './types'
import { SET_SOURCES } from '../consts'

export const addSource = (payload: ENTRY_ChosenSources): OUTPUT_Source => ({
  type: SET_SOURCES,
  payload
})
