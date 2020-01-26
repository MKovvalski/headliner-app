import React from 'react'
import Layout from './Layout'
import HeadlinersContainer from './HeadlinersContainer'
import SearchContainer from './SearchContainer'
import Footer from './footer'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Layout>
        <SearchContainer />
        <HeadlinersContainer />
      </Layout>
      <Footer />
    </div>
  )
}

export default App
