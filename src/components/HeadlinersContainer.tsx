import React from 'react'
import HeadlinersRenderer from './HeadlinersRenderer'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/types'

const HeadlinersContainer: React.FC = () => {
  const totalResults: number = useSelector((state: RootStore) => state.headliners.totalResults)
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
      <HeadlinersRenderer />
    </div>
  )
}

export default HeadlinersContainer
