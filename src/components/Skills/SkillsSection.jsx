import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import skillsList from '../../data/skills.json'
import SkillBlock from './SkillBlock'

export default function SkillsSection() {
  return (
    <Container className="my-5">
      <h2 className='mb-4' id='skills'>
        Навыки
      </h2>
      <Row className='g-5'>
        {
          skillsList.map(skill => (
            <Col xs="12" md="6" lg="4" key={`skill-block-${skill.title}`}>
              <SkillBlock {...skill}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
