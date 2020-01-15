import React from 'react'
import useHeadlinersRequest, { OperationType } from '../hooks/useHeadlinersRequest'

const LoadMoreButton: React.FC = () => {
  const { triggerRequest } = useHeadlinersRequest()
  return (
    <button
      className='button'
      onClick={() => triggerRequest(OperationType.append)}
    >
      Get More
    </button>
  )
}

export default LoadMoreButton
