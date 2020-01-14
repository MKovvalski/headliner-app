import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import useHeadlinersRequest from '../hooks/useHeadlinersRequest'
import { ENTRY_Source } from '../store/actions/sources/types'
import { LOADING_STATUSES } from '../store/actions/consts'

const SearchButton: React.FC = () => {
  const { status, triggerRequest } = useHeadlinersRequest()
  const sources: ENTRY_Source[] = useSelector(({ sources}: RootStore) => sources.sources)
  const chosenSources: ENTRY_Source[] = useSelector(({ sources }: RootStore) => sources.chosenSources)
  const [ disabledStatus, setDisabilityStatus ] = useState<boolean>(true)

  useEffect(() => {
    disabledStatus && setDisabilityStatus(false)
  }, [ sources, chosenSources ])

  const hasNoSources = sources.length === 0

  return (
    <div className='search-button'>
      <button
        className='button'
        onClick={() => triggerRequest('add')}
        disabled={hasNoSources || disabledStatus || status === LOADING_STATUSES.loading}
      >
        Confirm selection
      </button>
    </div>
  )
}

export default SearchButton
