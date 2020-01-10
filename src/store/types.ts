import {
  ENTRY_toReadsStore,
  ENTRY_headlinersStore,
  ENTRY_sourcesStore,
  ENTRY_searchParamsStore
} from './reducers/types'

export interface RootStore {
  headliners: ENTRY_headlinersStore,
  toReads: ENTRY_toReadsStore,
  sources: ENTRY_sourcesStore,
  searchParams: ENTRY_searchParamsStore
}
