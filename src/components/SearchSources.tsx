import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RequestStatusRange, SourcesParams } from '../utils/api/types'
import { RootStore } from '../store/types'
import { requestSources } from '../utils/api/api'
import { formatSourcesResponseData } from '../utils/api/apiMethods'
import DropdownSelect from './Inputs/DropdownSelect'
import { ENTRY_Source } from '../store/actions/sources/types'
import { setSources, setChosenSources } from '../store/actions/sources/actions'

const SearchSources: React.FC = () => {
  const dispatch = useDispatch()
  const searchParams: SourcesParams = useSelector((state: RootStore) => state.searchParams)
  const sources: ENTRY_Source[] = useSelector((state: RootStore) => state.sources.sources)

  const [ status, updateStatus ] = useState<RequestStatusRange>(null)
  const [ selectValue, updateSelectValue ] = useState<ENTRY_Source[]>([])
  const [ disabledStatus, setDisabilityStatus ] = useState<boolean>(true)

  const requestSourceList = async () => {
    try {
      setDisabilityStatus(true)
      updateStatus('loading')

      const { data }: any = await requestSources(searchParams)
      const { sources } = formatSourcesResponseData(data)

      dispatch(setSources({ sources }))
      updateStatus('success')
      setDisabilityStatus(false)

    } catch (e) {
      updateStatus('error')
    }
  }

  const valueDispatcher = (value: ENTRY_Source[]): void => {
    dispatch(setChosenSources({ chosenSources: value }))
  }

  useEffect(() => {
    requestSourceList()
    updateSelectValue([])
    valueDispatcher([])

  }, [ searchParams ])

  const valueChangeHandler = (value: ENTRY_Source[]): void => {
    const formattedValue = value === null? [] : value

    updateSelectValue(formattedValue)
    valueDispatcher(formattedValue)
  }

  return (
    <div className='search-sources'>
      <DropdownSelect
        isMulti={true}
        value={selectValue}
        onChange={valueChangeHandler}
        isDisabled={disabledStatus}
        options={sources}
        placeholder='Your sources'
      />
    </div>
  )
}

export default SearchSources
