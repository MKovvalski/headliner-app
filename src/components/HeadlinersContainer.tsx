import React from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import { loadingStateRange } from '../store/actions/ui/types'
import { LOADING_STATUSES } from '../store/actions/consts'
import NoInternetPlaceholder from './NoInternetPlaceholder'
import HeadlinersRenderer from './HeadlinersRenderer'
import HeadlinersPlaceholder from './HeadlinersPlaceholder'
import ServerError from './ServerError'

const HeadlinersContainer: React.FC = () => {
  const totalResults: number = useSelector((state: RootStore) => state.headliners.totalResults)
  const loadingSources: loadingStateRange = useSelector(({ ui }: RootStore) => ui.loadingSources)
  const loadingHeadliners: loadingStateRange = useSelector(({ ui}: RootStore) => ui.loadingHeadliners)
  const { loading, success, error } = LOADING_STATUSES

  const areHeadliners = (state: loadingStateRange): boolean => loadingHeadliners === state
  const lostConnection = loadingSources === error && loadingHeadliners === null

  return (
    <div className='headliners-container'>
      <div className='headliners-container__header'>
        <h2 className='headliners-container__title'>
          Your Headliners
        </h2>
        <div className='headliners-container__results'>
          {totalResults} headliners
        </div>
      </div>
      { lostConnection && <NoInternetPlaceholder /> }
      { areHeadliners(loading) && <HeadlinersPlaceholder quantity={3} /> }
      { areHeadliners(success) && <HeadlinersRenderer /> }
      { areHeadliners(error) && <ServerError /> }
    </div>
  )
}

export default HeadlinersContainer
