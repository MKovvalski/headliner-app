import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import useHeadlinersRequest from '../hooks/useHeadlinersRequest'
import { ENTRY_Source } from '../store/actions/sources/types'
import { LOADING_STATUSES } from '../store/actions/consts'
import { loadingStateRange } from '../store/actions/ui/types'
import { ENTRY_headliner } from '../store/actions/headliners/types'

const SearchButton: React.FC = () => {
  const { status, triggerRequest } = useHeadlinersRequest()
  const sources: ENTRY_Source[] = useSelector(({ sources}: RootStore) => sources.sources)
  const chosenSources: ENTRY_Source[] = useSelector(({ sources }: RootStore) => sources.chosenSources)
  const headliners: ENTRY_headliner[] | null = useSelector(({ headliners }: RootStore) => headliners.headliners)
  const loadingSources: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingSources)
  const [ disabledStatus, setDisabilityStatus ] = useState<boolean>(true)

  useEffect(() => {
    disabledStatus && setDisabilityStatus(false)
  }, [ sources, chosenSources ])

  useEffect(() => {
    const shouldRequestInitialHeadliners = loadingSources === 'success' && headliners === null

    if (shouldRequestInitialHeadliners) {
      triggerRequest('add')
    }
  }, [loadingSources])

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
