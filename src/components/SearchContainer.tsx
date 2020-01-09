import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchParams } from '../store/actions/searchParams/actions'
import { CATEGORIES_ARRAY, COUNTRIES_ARRAY, LANGUAGES_ARRAY } from '../utils/api/consts'
import DropdownSelect from './Inputs/DropdownSelect'
import { CategoriesInterface, CountriesInterface, LanguagesInterface } from '../utils/api/types'

const SearchContainer: React.FC = () => {
  const [ category, setCategory ] = useState<CategoriesInterface>(CATEGORIES_ARRAY[ 6 ])
  const [ country, setCountry ] = useState<CountriesInterface>(COUNTRIES_ARRAY[ 1 ])
  const [ language, setLanguage ] = useState<LanguagesInterface>(LANGUAGES_ARRAY[ 2 ])
  const [ disabled, setDisabledState ] = useState<boolean>(true)

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
    setDisabledState(false)
  }, [category, country, language])

  return (
    <div>
      I am search Container
      <DropdownSelect
        value={category}
        options={CATEGORIES_ARRAY}
        onChange={setCategory}
      />
      <DropdownSelect
        value={language}
        options={LANGUAGES_ARRAY}
        onChange={setLanguage}

      />
      <DropdownSelect
        value={country}
        options={COUNTRIES_ARRAY}
        onChange={setCountry}
      />
      <button
        disabled={disabled}
        onClick={dispatchChange}>
        I dispatch Params to store
      </button>
    </div>
  )
}

export default SearchContainer
