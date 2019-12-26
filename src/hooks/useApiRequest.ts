import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CallParameters } from '../utils/api/types'

import { apiCall } from '../utils/api/api'
import { formatResponseData } from '../utils/api/helpers'
import { getHeadliners } from '../store/actions/headliners/actions'

type StatusRange = 'loading' | 'success' | 'error' | null

interface UseApiHook {
  status: StatusRange,
  triggerRequest: any
}

export const useAPIRequest = (params: CallParameters): UseApiHook => {
  const [ status, updateStatus ] = useState<StatusRange>(null)
  const dispatch = useDispatch()

  const callAPI = async () => {
    try {
      updateStatus('loading')

      const { data }: any = await apiCall(params)
      const formattedResponse = formatResponseData(data)

      dispatch(getHeadliners(formattedResponse))

      updateStatus('success')

    } catch (error) {
      updateStatus('error')
    }
  }

  return {
    status,
    triggerRequest: callAPI
  }
}
