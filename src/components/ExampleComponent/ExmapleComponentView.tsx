import React, { useState } from 'react'

export type ExampleComponentProps = {
  title: string,
  description: string
}

const ExampleComponent = ({ title, description }: ExampleComponentProps) => {

  const [count, setCount] = useState(0)

  // TODO: add state test
  // add base methods for shallow and so forth
  // test conditional rendering
  return (
    <div className='example-component-class'>
      <h2>{title}</h2>
      <div>{description}</div>
      <div
        className='example-component-class__button'
        onClick={() => setCount(count + 1)}
      >
        Up the Counter!
      </div>
      <div>
        Display number of counter clicks:
        <span>{count}</span>
      </div>
    </div>
  )
}

export default ExampleComponent
