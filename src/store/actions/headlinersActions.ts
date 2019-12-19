import { PayloadInterface, ActionResult } from './types'
import { GET_HEADLINERS, APPEND_HEADLINERS, REFRESH_HEADLINERS } from './consts'

export const getHeadliners = (payload: PayloadInterface): ActionResult => ({
  type: GET_HEADLINERS,
  payload
})

export const appendHeadliners = (payload: PayloadInterface): ActionResult => ({
  type: APPEND_HEADLINERS,
  payload
})

export const overrideHeadliners = (payload: PayloadInterface): ActionResult => ({
  type: REFRESH_HEADLINERS,
  payload
})
