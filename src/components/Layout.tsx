import React from 'react'

interface Layout {
  children: React.ReactNode
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className='layout'>
      {children}
    </div>
  )
}

export default Layout


