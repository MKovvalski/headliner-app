import React from 'react'
import { ENTRY_headliners } from '../store/actions/headliners/types'
import { useSelector } from 'react-redux'

const HeadlinesContainer: React.FC = () => {
  const { totalResults, headliners }: ENTRY_headliners = useSelector(({ headliners }) => headliners)

  return (
    <div>
      <div>{totalResults}</div>
      {headliners && headliners.map(({ title }) => (
        <div>
          <div>{title}</div>
        </div>
      ))}
    </div>
  )
}

export default HeadlinesContainer
