export interface HeadlinersStoreStateInterface {
  totalResults: number
  headliners: object[] | null
}

export interface ToReadsStoreStateInterface {
  totalResults: number,
  beenReads: number,
  toDeletes: number,
  toReads: object[] | null
}