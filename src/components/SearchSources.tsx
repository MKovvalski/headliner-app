import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RequestStatusRange, SourcesParams } from '../utils/api/types'
import { RootStore } from '../store/types'
import { requestSources } from '../utils/api/api'
import { formatSourcesResponseData } from '../utils/api/apiMethods'
import DropdownSelect from './Inputs/DropdownSelect'
import { ENTRY_Source } from '../store/actions/sources/types'
import { setSources, setChosenSources } from '../store/actions/sources/actions'
import useSourcesRequest from '../hooks/useSourcesRequest'
import { LOADING_STATUSES } from '../store/actions/consts'

const SearchSources: React.FC = () => {
  const dispatch = useDispatch()

  const { status, triggerRequest } = useSourcesRequest()
  const searchParams: SourcesParams = useSelector((state: RootStore) => state.searchParams)
  const sources: ENTRY_Source[] = useSelector((state: RootStore) => state.sources.sources)
  const chosenSources: ENTRY_Source[] = useSelector((state: RootStore) => state.sources.chosenSources)

  useEffect(() => {
    triggerRequest()
    dispatch(setChosenSources({ chosenSources: [] }))

  }, [ searchParams ])

  const valueChangeHandler = (value: ENTRY_Source[]): void => {
    const chosenSources = value === null? [] : value

    dispatch(setChosenSources({ chosenSources }))
  }

  const isDisabled = status === LOADING_STATUSES.loading

  return (
    <div className='search-sources'>
      <DropdownSelect
        isMulti={true}
        options={sources}
        value={chosenSources}
        onChange={valueChangeHandler}
        isDisabled={isDisabled}
        placeholder='Your sources'
      />
    </div>
  )
}

export default SearchSources
