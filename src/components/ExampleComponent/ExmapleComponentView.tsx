import React, { useState } from 'react'
import { apiCall } from '../../utils/api/api'
import { formatResponseData } from "../../utils/api/helpers"
import { exampleRequest } from "../../utils/api/FAKE_data";
import { ENTRY_ResponseSuccess } from "../../utils/api/types";

export interface ExampleComponentProps {
  title: string,
  description: string
}

const ExampleComponent = ({ title, description }: ExampleComponentProps) => {

  const [count, setCount] = useState(0)

  // const a  = apiCall({ country: 'us' })
  //   .then(({ data }: any) => {
  //     console.log(data)
  //     console.log(formatResponseData(data))
  //   })
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
