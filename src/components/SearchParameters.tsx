import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchParams } from '../store/actions/searchParams/actions'
import { CATEGORIES_ARRAY, COUNTRIES_ARRAY, LANGUAGES_ARRAY } from '../utils/api/consts'
import DropdownSelect from './Inputs/DropdownSelect'
import { CategoriesInterface, CountriesInterface, LanguagesInterface } from '../utils/api/types'

const SearchParameters: React.FC = () => {
  const [ disabled, setDisabledState ] = useState<boolean>(true)
  const [ mounted, setMountedState ] = useState<boolean>(false)
  const [ category, setCategory ] = useState<CategoriesInterface>(CATEGORIES_ARRAY[ 6 ])
  const [ country, setCountry ] = useState<CountriesInterface>(COUNTRIES_ARRAY[ 1 ])
  const [ language, setLanguage ] = useState<LanguagesInterface>(LANGUAGES_ARRAY[ 2 ])

  const dispatch = useDispatch()

  const dispatchChange = (): void => {
    const formattedSearchParams = {
      category: category.value,
      country: country.value,
      language: language.value
    }

    setDisabledState(true)
    dispatch(setSearchParams(formattedSearchParams))
  }

  useEffect(() => {
    if (mounted) {
      setDisabledState(false)
    } else {
      setMountedState(true)
    }
  }, [ category, country, language ])

  return (
    <div className='search-params'>
      <div className='search-params__select-wrapper'>\
        <DropdownSelect
          value={category}
          options={CATEGORIES_ARRAY}
          onChange={setCategory}
          className='params-select'
          classNamePrefix='params-select'
        />
      </div>
      <div className='search-params__select-wrapper'>
        <DropdownSelect
          value={language}
          options={LANGUAGES_ARRAY}
          onChange={setLanguage}
          className='params-select'
          classNamePrefix='params-select'
        />
      </div>
      <div className='search-params__select-wrapper'>
        <DropdownSelect
          value={country}
          options={COUNTRIES_ARRAY}
          onChange={setCountry}
          className='params-select'
          classNamePrefix='params-select'
        />
      </div>
      <button
        className='button'
        disabled={disabled}
        onClick={dispatchChange}
      >
        Apply parameters
      </button>
    </div>
  )
}

export default SearchParameters
