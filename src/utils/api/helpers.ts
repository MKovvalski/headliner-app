import { ENTRY_ResponseSuccess } from './types'
import { ENTRY_headliners } from '../../store/actions/headliners/types'

import { HEADLINER_STATUSES } from '../../store/actions/consts'

export const formatResponseData = (responsePayload: ENTRY_ResponseSuccess): ENTRY_headliners => {
  const { totalResults, articles } = responsePayload

  const headliners = articles.map(({ source, content, ...rest }) => {
    return {
      status: HEADLINER_STATUSES.toRead,
      source: source.name,
      ...rest
    }
  })

  return {
    totalResults,
    headliners
  }
}
