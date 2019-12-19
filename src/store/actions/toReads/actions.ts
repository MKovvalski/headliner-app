import {
  ToReadsPayloadInterface,
  ToReadsActionResult,
  AddHeadlinerResult,
  RemoveHeadlinerResult,
  ChangeHeadlinerStatus,
  RemoveHeadliner,
  ChangeHeadlinerResult
} from './types'

import {
  GET_TO_READ_LIST,
  ADD_HEADLINER_TO_LIST,
  REMOVE_HEADLINER_FROM_LIST,
  CHANGE_HEADLINER_STATUS
} from '../consts'

export const getToReads = (payload: ToReadsPayloadInterface): ToReadsActionResult => ({
  type: GET_TO_READ_LIST,
  payload
})

export const addHeadlinerToList = (payload: object): AddHeadlinerResult => ({
  type: ADD_HEADLINER_TO_LIST,
  payload
})

export const removeHeadlinerToList = (payload: RemoveHeadliner): RemoveHeadlinerResult => ({
  type: REMOVE_HEADLINER_FROM_LIST,
  payload
})

export const changeHeadlinerStatus = (payload: ChangeHeadlinerStatus): ChangeHeadlinerResult => ({
  type: CHANGE_HEADLINER_STATUS,
  payload
})