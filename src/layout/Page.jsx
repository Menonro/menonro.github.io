import React from 'react'

export default function Page({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          padding-top: 100px;
        }
        `}</style>
    </div>
  )
}
