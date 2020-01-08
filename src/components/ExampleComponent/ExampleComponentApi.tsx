import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store/types'
import { requestSources } from '../../utils/api/api'
import { RequestStatusRange, SourcesParams } from '../../utils/api/types'
import { COUNTRIES, CATEGORIES, LANGUAGES } from '../../utils/api/consts'
import { formatSourcesResponseData } from '../../utils/api/helpers'
import { getSources } from '../../store/actions/search/actions'
import { ENTRY_Source } from '../../store/actions/search/types'
import ExampleComponent from './ExmapleComponentView'

const INITIAL_STATE: SourcesParams = {
  category: CATEGORIES.entertainment,
  language: LANGUAGES.english,
  country: COUNTRIES.unitedStates
}

const ExampleComponentApi = () => {
  const dispatch = useDispatch()
  const sources: ENTRY_Source[] | null = useSelector((state: RootStore) => state.search.sources)

  const [ parameters, setParams ] = useState<SourcesParams>(INITIAL_STATE)
  const [ status, updateStatus ] = useState<RequestStatusRange>(null)

  const requestSourceList = async () => {
    try {
      updateStatus('loading')

      const { data }: any = await requestSources(parameters)

      const formattedResponse = formatSourcesResponseData(data)

      dispatch(getSources(formattedResponse))

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
      sources={sources}
    />
  )
}

export default ExampleComponentApi
