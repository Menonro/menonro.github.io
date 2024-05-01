import React from 'react'
import Hexagone from './Hexagone'

export default function NameHexagone() {
  return (
    <div>
      <Hexagone style={{
        background: 'linear-gradient(120deg,#1e88e5,#01579b,#01579b)',
        backgroundSize: '250% 250%',
        animation: 'spinGradient 5s ease-in-out infinite',
      }}>
        <h2>
          Menonro
        </h2>
        <h5>
          Middle+
        </h5>
      </Hexagone>
      <style jsx>{`
        div {
          max-width: 280px;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
