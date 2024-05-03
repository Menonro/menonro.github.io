import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PercentLine from '../Base/PercentLine'
import BrandImg from './BrandImg'
import MinMaxYears from './MinMaxYears'

export default function BrandBlock({ logo, name, works }) {
  return (
    <div className="mb-5" id={name}>
      <PercentLine>
        <Row>
          <Col xs="12" md="4">
            <div className="py-3">
              <BrandImg src={logo} />
            </div>
          </Col>
          <Col xs="12" md="8">
            <h4 className='mb-3'>{ name }</h4>
            <div className="d-flex flex-column mb-4">
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
          </Col>
        </Row>
      </PercentLine>
      <Row className='mt-3'>
        {
          works.map(({ year, name }, index) => (
            <Col xs="6" lg="4" className='mb-3'>
              <Timeline title={year} key={`work-block-${name}-${year}-${index}`}>
                { name }
              </Timeline>
            </Col>
          ))
        }
      </Row>
      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
    </div>
  )
}

function Timeline({ children, title }) {
  return <div>
    <h5>{ title }</h5>
    { children }
    <style jsx>{`
      div {
        border-bottom: 2px solid rgba(255,255,255,.5);
      }  
    `}</style>
  </div>
}
