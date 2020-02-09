import React from 'react'
import Header from './Header'
import Layout from './Layout'
import HeadlinersContainer from './HeadlinersContainer'
import SearchContainer from './SearchContainer'
import Footer from './footer'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header /> 
      <Layout>
        <SearchContainer />
        <HeadlinersContainer />
      </Layout>
      <Footer />
    </div>
  )
}

export default App
