import React from 'react'
import { Col, Row } from 'react-bootstrap'

import contactsList from '../../data/contacts.json'
import BlockImgTitle from '../Base/BlockImgTitle'
import PercentLine from '../Base/PercentLine'
import Section from '../Base/Section'

export default function ContactsSection() {
  return (
    <Section id="contacts" title="Контакты">
      <Row>
        {
          contactsList.map((contact, index) => (
            <Col xs="12" md="4" key={`contact-${index}`}>
              <ContactBlock {...contact} index={ index }/>
            </Col>
          ))
        }
      </Row>
    </Section>
  )
}

function ContactBlock({ title, href, icon, index }) {
  return (
    <PercentLine index={ index }>
      <BlockImgTitle title={ title } icon={ icon } href={ href }/>
    </PercentLine>
  )
}
