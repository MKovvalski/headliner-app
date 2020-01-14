import React from 'react'

const ServerError: React.FC = () => {
  return (
    <div className='server-error'>
      <div>
        <div className='server-error__title'>
          Server error
        </div>
        <div className='server-error__subtitle'>
          Something went wrong
        </div>
      </div>
    </div>
  )
}

export default ServerError
