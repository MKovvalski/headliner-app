import { ENTRY_toReadsStore, ENTRY_headlinersStore } from './reducers/types'

export interface RootStore {
  headliners: ENTRY_headlinersStore
  toReads: ENTRY_toReadsStore,
}
