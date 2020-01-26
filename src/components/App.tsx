import React from 'react'
import Layout from './Layout'
import HeadlinersContainer from './HeadlinersContainer'
import SearchContainer from './SearchContainer'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Layout>
        <SearchContainer />
        <HeadlinersContainer />
      </Layout>
    </div>
  )
}

export default App
