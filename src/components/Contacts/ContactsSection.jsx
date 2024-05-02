import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import contactsList from './contacts.json'
import BlockImgTitle from '../Typographic/BlockImgTitle'
import PercentLine from '../Typographic/PercentLine'

export default function ContactsSection() {
  return (
    <Container className="my-5">
      <h2 className='mb-4' id="contacts">
        Контакты
      </h2>
      <Row className='g-5'>
        {
          contactsList.map((contact, index) => (
            <Col xs="12" md="6" lg key={`contact-${index}`}>
              <ContactBlock {...contact} index={ index }/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

function ContactBlock({ title, href, icon, speed, index }) {
  return (
    <PercentLine percent={100} index={ index }>
      <BlockImgTitle title={ title } icon={ icon } href={ href }/>
    </PercentLine>
  )
}
