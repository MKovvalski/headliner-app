// entries
export interface Headliner {
  title: string,
  status: number
}

export interface ToReadsPayloadInterface {
  totalResults: number
  beenReads: 0,
  toDeletes: 0,
  toReads: Headliner[] | null
}

export interface RemoveHeadliner {
  identifier: string
}

type StatusRange = 0 | 1 | 2

export interface ChangeHeadlinerStatus {
  status: StatusRange,
  identifier: string
}

export type PayloadRange = ToReadsPayloadInterface | RemoveHeadliner | ChangeHeadlinerStatus | object

// outputs
export interface ToReadsActionResult {
  type: string,
  payload: ToReadsPayloadInterface
}

export interface AddHeadlinerResult {
  type: string,
  payload: object
}

export interface RemoveHeadlinerResult{
  type: string,
  payload: RemoveHeadliner
}

export interface ChangeHeadlinerResult {
  type: string,
  payload: ChangeHeadlinerStatus
}

export interface ToReadsReducerAction {
  type: string,
  payload: PayloadRange
}