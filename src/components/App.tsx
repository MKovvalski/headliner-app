import React from 'react'
import SearchContainer from './SearchContainer'
import SearchSources from './SearchSources'
import SearchButton from './SearchButton'
import HeadlinesContainer from './HeadlinesContainer'

const App = () => {
  return (
    <div className='app-test'>
      <SearchContainer />
      <SearchSources />
      <SearchButton />
      <HeadlinesContainer />
    </div>
  )
}

export default App
