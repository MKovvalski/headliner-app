import React, { useEffect, useState } from 'react'
import { ENTRY_Source } from '../store/actions/sources/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import { RequestStatusRange } from '../utils/api/types'
import { requestHeadlines } from '../utils/api/api'
import { getHeadliners } from '../store/actions/headliners/actions'
import { formatHeadersResponseData } from '../utils/api/apiMethods'

const formatDataForRequest = (sources: ENTRY_Source[]): string => {
  return sources.map(({ value }) => value).join(',')
}

const SearchButton: React.FC = () => {
  const dispatch = useDispatch()
  const sources: ENTRY_Source[] = useSelector((state: RootStore) => state.sources.sources)
  const chosenSources: ENTRY_Source[] = useSelector((state: RootStore) => state.sources.chosenSources)

  const [ requestState, setRequestState ] = useState<RequestStatusRange>(null)
  const [ disabledStatus, setDisabilityStatus ] = useState<boolean>(true)

  const hasSources = !!sources.length || !!chosenSources.length

  const requestHeadlinersList = async () => {
    setRequestState('loading')
    setDisabilityStatus(true)

    try {
      const sourcesToFormat = !!chosenSources.length ? chosenSources : sources

      const formattedSources = formatDataForRequest(sourcesToFormat)
      const { data } = await requestHeadlines({ sources: formattedSources, pageSize: 20 })
      const formattedData = formatHeadersResponseData(data)

      dispatch(getHeadliners(formattedData))
      setRequestState('success')

    } catch (e) {
      setRequestState('error')
    }
  }

  const requestTrigger = (): void => {
    if (hasSources) {
      requestHeadlinersList()
    }
  }

  useEffect(() => {
    disabledStatus && setDisabilityStatus(false)
  }, [ sources, chosenSources ])

  return (
    <div className='search-button'>
      <button
        className='button'
        onClick={requestTrigger}
        disabled={disabledStatus}
      >
        Confirm selection
      </button>
      <div>{requestState}</div>
    </div>
  )
}

export default SearchButton
