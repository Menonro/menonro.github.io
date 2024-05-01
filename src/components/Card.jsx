import React from 'react'

export default function Card({ children, padding = 15 }) {
  return (
    <div>
      { children }
      <style jsx>{`
        div {
          padding: ${padding}px;
          border-radius: 15px;
          background: linear-gradient(135deg, #1e88e5, #01579b,#01579b);
        }
      `}</style>
    </div>
  )
}
