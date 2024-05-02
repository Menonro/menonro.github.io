import React from 'react'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          padding-top: 100px;
        }  
      `}</style>
    </main>
  )
}

export default Layout
