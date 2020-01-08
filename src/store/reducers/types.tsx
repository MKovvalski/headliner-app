import { ENTRY_headliner } from '../actions/headliners/types'
import { SourcesParams } from '../../utils/api/types'
import { ENTRY_Source } from '../actions/sources/types'

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

export interface ENTRY_sourcesStore {
  sources: ENTRY_Source[] | null
}

export interface ENTRY_searchParamsStore extends SourcesParams {}
