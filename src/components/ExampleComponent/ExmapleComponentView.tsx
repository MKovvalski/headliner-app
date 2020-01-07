import React from 'react'
import { RequestStatusRange } from './ExampleComponentApi'

export interface ExampleComponentProps {
  title: string,
  description: string,
  triggerRequest: any,
  status: RequestStatusRange
}

const ExampleComponent = ({
  title,
  description,
  triggerRequest,
  status
}: ExampleComponentProps) => {

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
      {/*<div onClick={() => {}}>*/}
      {/*  Change Params*/}
      {/*</div>*/}
      {/*<div>{totalResults}</div>*/}
      {/*<div>*/}
      {/*  {headliners && headliners.map(({ title }) => (*/}
      {/*    <div>{title}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}

export default ExampleComponent
