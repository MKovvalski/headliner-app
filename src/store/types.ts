import { ENTRY_toReadsStore, ENTRY_headlinersStore, ENTRY_searchStore } from './reducers/types'

export interface RootStore {
  headliners: ENTRY_headlinersStore,
  toReads: ENTRY_toReadsStore,
  search: ENTRY_searchStore,
}
