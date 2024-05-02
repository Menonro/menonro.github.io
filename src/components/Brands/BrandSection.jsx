import React from 'react'
import Section from '../Base/Section'
import { Col, Row } from 'react-bootstrap'

import brandsList from '../../data/brands.json'

export default function BrandSection() {
  return (
    <>
      <Section id="clients" title="Клиенты">
        <Row className='mb-4 g-2'>
          {
            brandsList.big.map((brand, index) => (
              <Col xs="12" md="6" lg="4">
                <Brand logo={brand.logo} key={`brand-${index}`}/>
              </Col>
            ))
          }
        </Row>
        <Row className='mb-4 g-2'>
          {
            brandsList.medium.map((brand, index) => (
              <Col xs="6" md="3" lg="3">
                <Brand logo={brand.logo} key={`brand-${index}`}/>
              </Col>
            ))
          }
        </Row>
        <div className='grid mb-3'>
          {
            brandsList.other.map((brand, index) => (
              <Brand logo={brand.logo} key={`brand-${index}`}/>
            ))
          }
        </div>
      </Section>
      <style jsx>{`
        .grid {
          display: grid;
          grid-gap: .5rem;
          grid-auto-flow: column;
          grid-template-rows: repeat(3, 1fr);
        }
        @media screen and (max-width: 767px) {
          .grid {
            grid-auto-flow: row;
            grid-template-rows: auto;
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  )
}

function Brand({ logo }) {
  return (
    <>
      <figure>
        <img src={`/static/images/brands/${logo}`} alt="logo" />
      </figure>
      <style jsx>{`
        img {
          width: 100%;
          aspect-ratio: 2.25;
          object-fit: contain;
          filter: saturate(0.75);
        }
        figure {
          background-color: rgba(255,255,255,0);
          display: flex;
          justify-content: center;
          padding: 5%;
          margin-bottom: 0;
          border-bottom: 3px solid white;
          cursor: pointer;
          transition: background .3s ease-out;
        }
        figure:hover {
          background-color: rgba(255,255,255,.1);
        }
      `}</style>
    </>
  )
}