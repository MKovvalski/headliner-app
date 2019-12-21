import { ENTRY_headliner } from '../toReads/types'

// entries
export interface ENTRY_headlinerStatus {
  toRead: number,
  beenRead: number,
  toDelete: number
}

export interface ENTRY_headliners {
  totalResults: number
  headliners: ENTRY_headliner[] | null
}

// outputs
export interface OUTPUT_headliners {
  type: string,
  payload: ENTRY_headliners
}
