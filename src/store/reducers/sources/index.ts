import { ENTRY_sourcesStore } from '../types'
import { OUTPUT_Source } from '../../actions/sources/types'
import { SET_SOURCES } from '../../actions/consts'

const INITIAL_STATE: ENTRY_sourcesStore = {
  chosenSources: []
}

const sources = (
  state: ENTRY_sourcesStore = INITIAL_STATE,
  { type, payload }: OUTPUT_Source
): ENTRY_sourcesStore => {
  switch (type) {
    case SET_SOURCES:
      return {
        chosenSources: payload.chosenSources
      }
  }

  return state
}

export default sources
