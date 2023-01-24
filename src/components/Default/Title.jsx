import React from 'react'

const Title = ({ text }) => {
  return (
    <>
      <h2>
        {text}
      </h2>
      <style jsx>{`
        h2 {
          font-size: calc(1.75rem + 10px);
          text-align: center;
        }
        @media screen and (max-width: 768px) {
          h2 { font-size: calc(1.25rem + 10px); }
        }
        @media screen and (max-width: 520px) {
          h2 { font-size: calc(0.75rem + 10px); }
        }
      `}</style>
    </>
  )
}

export default Title
