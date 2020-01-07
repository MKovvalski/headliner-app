import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RootStore } from '../../store/types'
import { SourcesParams } from '../../utils/api/types'
import { COUNTRIES, CATEGORIES, LANGUAGES} from '../../utils/api/consts'
import ExampleComponent from './ExmapleComponentView'
import { requestSources } from '../../utils/api/api'

export type RequestStatusRange = 'loading' | 'success' | 'error' | null

const connector = connect(({ headliners }: RootStore) => ({
  headliners
}))

const ExampleComponentApi = () => {
  const dispatch = useDispatch()
  const [ parameters, setParams ] = useState<SourcesParams>({
    category: CATEGORIES.entertainment,
    language: LANGUAGES.english,
    country: COUNTRIES.unitedStates
  })
  const [ status, updateStatus ] = useState<RequestStatusRange>(null)


  const requestSourceList = async () => {

    try {
      updateStatus('loading')

      const { data }: any = await requestSources(parameters)

      console.log(data)

      // TODO: write sanitization method that leaves only name and ID
      // const formattedResponse = formatResponseData(data)

      // dispatch(getHeadliners(formattedResponse))

      updateStatus('success')

    } catch (e) {

      updateStatus('error')

    }
  }

  return (
    <ExampleComponent
      title='I am ExampleComponent'
      description='I show how app basics work'
      triggerRequest={requestSourceList}
      status={status}
    />
  )
}

export default connector(ExampleComponentApi)
