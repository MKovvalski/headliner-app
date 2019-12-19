// entries
export interface Headliner {
  title: string,
  status: number
}

export interface HeadlinerStatus {
  toRead: number,
  beenRead: number,
  toDelete: number
}

export interface HeadlinerPayloadInterface {
  totalResults: number
  headliners: Headliner[] | null
}

// outputs
export interface HeadlinerActionResult {
  type: string,
  payload: HeadlinerPayloadInterface
}
