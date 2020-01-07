import { ENTRY_searchStore } from '../types'

const INITIAL_STATE: ENTRY_searchStore = {
  category: 'business',
  country: 'us',
  language: 'en'
}

const search = (
  state: ENTRY_searchStore = INITIAL_STATE,
  { type, payload }: any
) => {
  switch (type) {
    case 'TODO':
      return payload
  }

  return state
}

export default search
