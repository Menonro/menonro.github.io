import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PercentLine from '../Base/PercentLine'
import BrandImg from './BrandImg'
import MinMaxYears from './MinMaxYears'

export default function BrandBlock({ id, logo, name, description, works }) {
  return (
    <div className="mb-5" id={id}>
      <PercentLine>
        <Row>
          <Col xs="12" md="4">
            <div className="py-3">
              <BrandImg src={logo} />
            </div>
          </Col>
          <Col xs="12" md="8">
            <div className="d-flex flex-column justify-content-between h-100">
              <h4 className='mb-3'>{ name }</h4>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span className='h6'>Проектов</span>
                  <span className='h6'>
                    { works.length }
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className='h6'>Период работы</span>
                  <span className='h6'>
                    <MinMaxYears works={works}/>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </PercentLine>
      <p>
        { description }
      </p>
      <div className='grid'>
        {
          works.map(({ year, name }, index) => (
            <Timeline title={year} key={`work-block-${name}-${year}-${index}`}>
              { name }
            </Timeline>
          ))
        }
      </div>
      <style jsx>{`
        img {
          max-width: 100%;
        }
        .grid {
          display: grid;
          gap: 0.5rem;
          grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 575px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media screen and (max-width: 359px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

function Timeline({ children, title }) {
  return <div>
    <h5>{ title }</h5>
    <p>
      { children }
    </p>
    <style jsx>{`
      div {
        border-bottom: 1px solid rgba(255,255,255,.5);
        margin-bottom: 10px;
      }  
    `}</style>
  </div>
}
