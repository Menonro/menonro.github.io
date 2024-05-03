import React from 'react'
import { Container } from 'react-bootstrap'

export default function Section({ title = '', id = '', children }) {
  return (
    <Container className="my-5">
      <h2 className='mb-4' id={ id }>
        { title }
      </h2>
      { children }
      <style jsx>{`
        @media screen and (max-width: 991px) {
          h2 {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  )
}
