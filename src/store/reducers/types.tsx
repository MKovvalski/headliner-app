import { ENTRY_headliner } from '../actions/headliners/types'
import { CategoriesRange, CountriesRange, LanguagesRange } from '../../utils/api/types'
import { ENTRY_Source } from '../actions/search/types'

export interface ENTRY_headlinersStore {
  totalResults: number
  headliners: ENTRY_headliner[] | null
}

export interface ENTRY_toReadsStore {
  totalResults: number,
  beenReads: number,
  toDeletes: number,
  toReads: ENTRY_headliner[] | null
}

export interface ENTRY_searchStore {
  searchParams: {
    category: CategoriesRange,
    country: CountriesRange,
    language: LanguagesRange,
  },
  sources: ENTRY_Source[] | null
}
