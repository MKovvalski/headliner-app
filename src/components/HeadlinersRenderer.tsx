import React from 'react'
import { ENTRY_headliners } from '../store/actions/headliners/types'
import { useSelector } from 'react-redux'
import HeadlinersPlaceholder from './HeadlinersPlaceholder'
import HeadlinerTile from './HeadlinerTile'

const HeadlinersRenderer: React.FC = () => {
  const { headliners }: ENTRY_headliners = useSelector(({ headliners }) => headliners)

  return (
    <>
      {!headliners && <HeadlinersPlaceholder quantity={3} />}
      {!!headliners && <div className='headliners-renderer'>
        {headliners.map((headliner) => (
          <HeadlinerTile
            key={headliner.title}
            {...headliner}
          />
        ))}
      </div>
      }
    </>
  )
}

export default HeadlinersRenderer
