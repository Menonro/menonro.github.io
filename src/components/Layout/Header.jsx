import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import ContentTitle from '../Typographic/ContentTitle'
import BackBtn from '../Typographic/BackBtn'
import MenuBtn from '../Typographic/MenuBtn'

export default function Header({ title }) {
    return (
        <Container>
          <Row className="justify-content-md-center justify-content-around">
            <Col xs="auto">
              <div className="mt-5 mb-3">
                <BackBtn/>
              </div>
            </Col>
            <Col xs="auto" className="order-last order-md-0">
              <ContentTitle>{title}</ContentTitle>
            </Col>
            <Col xs="auto">
              <div className="mt-5 mb-3">
                <MenuBtn/>
              </div>
            </Col>
          </Row>
        </Container>
    )
}
