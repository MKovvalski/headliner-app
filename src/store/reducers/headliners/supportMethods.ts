import { HeadlinersStoreStateInterface } from '../types'
import { HeadlinerPayloadInterface } from '../../actions/headliners/types'

export const appendHeadliners = (
  state: HeadlinersStoreStateInterface,
  payload: HeadlinerPayloadInterface
): HeadlinersStoreStateInterface => {
  return {
    totalResults: payload.totalResults,
    headliners: [...state.headliners, ...payload.headliners]
  }
}
