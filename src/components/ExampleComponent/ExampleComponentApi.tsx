import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store/types'
import { requestSources } from '../../utils/api/api'
import { RequestStatusRange, SourcesParams } from '../../utils/api/types'
import { COUNTRIES_ARRAY, CATEGORIES_ARRAY, LANGUAGES_ARRAY } from '../../utils/api/consts'
import { formatSourcesResponseData } from '../../utils/api/apiMethods'
import { getSources } from '../../store/actions/sources/actions'
import { ENTRY_Source } from '../../store/actions/sources/types'
import ExampleComponent from './ExmapleComponentView'

const INITIAL_STATE: SourcesParams = {
  category: CATEGORIES_ARRAY[0].value,
  language: LANGUAGES_ARRAY[0].value,
  country: COUNTRIES_ARRAY[0].value
}

const ExampleComponentApi = () => {
  const dispatch = useDispatch()
  const sources: ENTRY_Source[] | null = useSelector((state: RootStore) => state.sources.sources)

  const [ status, updateStatus ] = useState<RequestStatusRange>(null)

  const requestSourceList = async () => {
    try {
      updateStatus('loading')

      const { data }: any = await requestSources(INITIAL_STATE)

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
