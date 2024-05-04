import React, { useMemo } from 'react'
import Section from '../Base/Section'
import { Col, Row } from 'react-bootstrap'

import brandsList from '../../data/brands.json'
import BrandWorks from './BrandWorks'
import { sortByWorks } from '../../utils/brands'
import { Link } from 'react-router-dom'
import BrandImg from './BrandImg'

export default function BrandSection() {
  const allBrands = useMemo(() => brandsList.main.sort(sortByWorks), [brandsList])
  const brands = useMemo(() => allBrands.slice(0, 7), [allBrands])
  const otherCount = allBrands.length - brands.length + brandsList.other.length
  return (
    <>
      <Section id="clients" title="Клиенты">
        <Row className='mb-4 g-2'>
          {
            brands.map((brand, index) => (
              <Col xs="12" md="6" lg="3" key={`brand-${index}-${brand.id}`} className='mb-3'>
                <Link to={`/clients#${brand.id}`}>
                  <Brand { ...brand }/>
                </Link>
              </Col>
            ))
          }
          {
            otherCount > 0
              ? 
                <Col xs="12" md="6" lg="3">
                  <Link to="/clients">
                    <Brand text={<span>
                        И ещё <b>{otherCount}</b> клиента
                      </span>} />
                  </Link>
                </Col>
              : null
          }
        </Row>
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

function Brand({ logo, text, works = [] }) {
  return (
    <>
      <figure>
        {
          logo
            ? <BrandImg src={logo} />
            : <div className="d-flex align-items-center justify-content-center img h5 mb-0 text-center">
              { text }
            </div>
        }
      </figure>
      {
        logo ? <BrandWorks works={works}/> : 'Перейти'
      }
      <style jsx>{`
        figure {
          background-color: rgba(255,255,255,0);
          display: flex;
          justify-content: center;
          padding: 5%;
          margin-bottom: 10px;
          border-bottom: 3px solid ${logo ? 'rgba(255,255,255,.5)' : 'rgba(255,255,255,.25)' };
          cursor: pointer;
          transition: background .3s ease-out;
          aspect-ratio: 2;
        }
        figure:hover {
          background-color: rgba(255,255,255,.1);
        }
      `}</style>
    </>
  )
}
