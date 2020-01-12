import React from 'react'
import Layout from './Layout'
import HeadlinersContainer from './HeadlinersContainer'
import SearchContainer from './SearchContainer'

const App = () => {
  return (
    <Layout>
      <SearchContainer />
      <HeadlinersContainer />
    </Layout>
  )
}

export default App
