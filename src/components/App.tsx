import React from 'react'
import Layout from './Layout'
import HeadlinesContainer from './HeadlinesContainer'
import SearchContainer from './SearchContainer'

const App = () => {
  return (
    <Layout>
      <SearchContainer />
      <HeadlinesContainer />
    </Layout>
  )
}

export default App
