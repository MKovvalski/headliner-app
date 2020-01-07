import produce from 'immer'
import { ENTRY_searchStore } from '../types'
import { OUTPUT_DefaultAction } from '../../actions/search/types'
import { GET_SOURCES, SET_SOURCES } from '../../actions/consts'

const INITIAL_STATE: ENTRY_searchStore = {
  searchParams: {
    category: 'business',
    language: 'en',
    country: 'us'
  },
  sources: null
}

const search = (
  state: ENTRY_searchStore = INITIAL_STATE,
  { type, payload }: OUTPUT_DefaultAction
): ENTRY_searchStore => {
  switch (type) {
    case GET_SOURCES:
      return produce(state, ({ sources, ...rest }) => ({
        sources: payload.sources,
        ...rest
      }))

    case SET_SOURCES:
      return null

  }

  return state
}

export default search
