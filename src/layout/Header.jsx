import React from 'react'

import { Row, Col } from 'react-bootstrap'

import ContentTitle from '../components/Typographic/ContentTitle'
import BackBtn from '../components/Typographic/BackBtn'
import MenuBtn from '../components/Typographic/MenuBtn'

export default function Header({ title }) {
    return (
        <div>
          <Row className="justify-content-md-center justify-content-around g-1">
            <Col xs="auto">
              <div className="mt-5 mb-3">
                <BackBtn/>
              </div>
            </Col>
            <Col xs="auto">
              <ContentTitle>{title}</ContentTitle>
            </Col>
            <Col xs="auto">
              <div className="mt-5 mb-3">
                <MenuBtn/>
              </div>
            </Col>
          </Row>
        </div>
    )
}
