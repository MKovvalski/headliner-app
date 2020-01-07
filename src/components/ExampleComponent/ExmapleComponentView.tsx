import React from 'react'
import { RequestStatusRange } from '../../utils/api/types'
import { ENTRY_Source } from '../../store/actions/search/types'

export interface ExampleComponentProps {
  title: string,
  description: string,
  triggerRequest: any,
  status: RequestStatusRange,
  sources: ENTRY_Source[] | null
}

const ExampleComponent = ({
  title,
  description,
  triggerRequest,
  status,
  sources
}: ExampleComponentProps) => {

  return (
    <div className='example-component-class'>
      <h2>{title}</h2>
      <div>{description}</div>
      <div
        className='example-component-class__button'
        onClick={triggerRequest}
      >
        Ask for Sources
      </div>
      <div>{status}</div>
      <div>
        {sources && sources.map(({ name }) => (
          <div>{name}</div>
        ))}
      </div>
    </div>
  )
}

export default ExampleComponent
