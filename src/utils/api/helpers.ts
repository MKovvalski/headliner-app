import axios from 'axios'
import { ENTRY_ResponseSuccess, RequestBuilder } from './types'
import { ENTRY_headliners } from '../../store/actions/headliners/types'

import { HEADLINER_STATUSES } from '../../store/actions/consts'
import { API_KEY, API_URL } from '../../../config'

export const buildRequest = ({
  url,
  params,
  method = 'GET'
}: RequestBuilder): any => {
  return axios({
    baseURL: API_URL,
    headers: { 'X-Api-Key': API_KEY },
    method,
    url,
    params
  })
}

export const formatResponseData = (responsePayload: ENTRY_ResponseSuccess): ENTRY_headliners => {
  const { totalResults, articles } = responsePayload

  const headliners = articles.map(({
    source,
    content,
    ...rest
  }) => {
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
