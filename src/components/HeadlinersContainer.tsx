import React from 'react'
import HeadlinersRenderer from './HeadlinersRenderer'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/types'
import { loadingStateRange } from '../store/actions/ui/types'
import HeadlinersPlaceholder from './HeadlinersPlaceholder'
import { LOADING_STATUSES } from '../store/actions/consts'

const HeadlinersContainer: React.FC = () => {
  const totalResults: number = useSelector((state: RootStore) => state.headliners.totalResults)
  const loadingState: loadingStateRange = useSelector((state: RootStore) => state.ui.loadingHeadliners)

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
      { loadingState === LOADING_STATUSES.loading && <HeadlinersPlaceholder quantity={3}/> }
      { loadingState === LOADING_STATUSES.success && <HeadlinersRenderer /> }
      { loadingState === LOADING_STATUSES.error && <div>Sorry, our server got sick and went home early </div> }
    </div>
  )
}

export default HeadlinersContainer
