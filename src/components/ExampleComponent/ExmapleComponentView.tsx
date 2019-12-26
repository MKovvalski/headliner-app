import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAPIRequest } from '../../hooks/useApiRequest'
import { CallParameters } from '../../utils/api/types'
import { ENTRY_headliners } from '../../store/actions/headliners/types'
import { RootStore } from '../../store/types'

export interface ExampleComponentProps {
  title: string,
  description: string,
  headliners: ENTRY_headliners
}

const connector = connect(({ headliners }: RootStore) => ({
  headliners
}))

const ExampleComponent = ({
  title,
  description,
  headliners: { totalResults, headliners },
  ...rest
}: ExampleComponentProps) => {

  const [ parameters, setParams ] = useState<CallParameters>({ category: 'health', country: 'us' })

  const { status, triggerRequest } = useAPIRequest(parameters)

  return (
    <div className='example-component-class'>
      <h2>{title}</h2>
      <div>{description}</div>
      <div
        className='example-component-class__button'
        onClick={triggerRequest}
      >
        Ask for articles
      </div>
      <div>{status}</div>
      <div onClick={() => setParams({ category: 'business', country: 'pl' })}>
        Change Params
      </div>
      <div>{totalResults}</div>
      <div>
        {headliners && headliners.map(({ title }) => (
          <div>{title}</div>
        ))}
      </div>
    </div>
  )
}

export default connector(ExampleComponent)
