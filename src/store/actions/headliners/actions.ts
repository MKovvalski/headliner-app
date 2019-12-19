import { HeadlinerPayloadInterface, HeadlinerActionResult } from './types'
import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from '../consts'

export const getHeadliners = (payload: HeadlinerPayloadInterface): HeadlinerActionResult => ({
  type: GET_HEADLINERS,
  payload
})

export const appendHeadliners = (payload: HeadlinerPayloadInterface): HeadlinerActionResult => ({
  type: APPEND_HEADLINERS,
  payload
})

export const overrideHeadliners = (payload: HeadlinerPayloadInterface): HeadlinerActionResult => ({
  type: REFRESH_HEADLINERS,
  payload
})
