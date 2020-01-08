import produce from 'immer'
import { ENTRY_sourcesStore } from '../types'
import { OUTPUT_DefaultAction } from '../../actions/sources/types'
import { GET_SOURCES, SET_SOURCES } from '../../actions/consts'

const INITIAL_STATE: ENTRY_sourcesStore = {
  sources: null
}

const sources = (
  state: ENTRY_sourcesStore = INITIAL_STATE,
  { type, payload }: OUTPUT_DefaultAction
): ENTRY_sourcesStore => {
  switch (type) {
    case GET_SOURCES:
      return produce(state, ({ sources, ...rest }) => ({
        sources: payload.sources,
        ...rest
      }))
  }

  return state
}

export default sources
