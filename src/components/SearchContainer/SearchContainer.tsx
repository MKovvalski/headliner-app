import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchParams } from '../../store/actions/searchParams/actions'
import { CATEGORIES_ARRAY, COUNTRIES_ARRAY, LANGUAGES_ARRAY } from '../../utils/api/consts'
import DropdownSelect from '../Inputs/DropdownSelect'
import { CategoriesInterface, CountriesInterface, LanguagesInterface } from '../../utils/api/types'

const SearchContainer: React.FC = () => {
  const dispatch = useDispatch()
  const [ category, setCategory ] = useState<CategoriesInterface>(CATEGORIES_ARRAY[ 0 ])
  const [ country, setCountry ] = useState<CountriesInterface>(COUNTRIES_ARRAY[ 0 ])
  const [ language, setLanguage ] = useState<LanguagesInterface>(LANGUAGES_ARRAY[ 0 ])

  const dispatchChange = (): void => {
    const formattedSearchParams = {
      category: category.value,
      country: country.value,
      language: language.value
    }

    dispatch(setSearchParams(formattedSearchParams))
  }

  return (
    <div>
      I am search Container
      <DropdownSelect
        value={category}
        defaultValue={CATEGORIES_ARRAY[ 0 ]}
        options={CATEGORIES_ARRAY}
        onChange={setCategory}
      />
      <DropdownSelect
        value={language}
        defaultValue={LANGUAGES_ARRAY[ 0 ]}
        options={LANGUAGES_ARRAY}
        onChange={setLanguage}
      />
      <DropdownSelect
        value={country}
        defaultValue={COUNTRIES_ARRAY[ 0 ]}
        options={COUNTRIES_ARRAY}
        onChange={setCountry}
      />
      <button onClick={dispatchChange}>
        I dispatch Params to store
      </button>
    </div>
  )
}

export default SearchContainer
