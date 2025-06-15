import React from 'react'
import { Col, Row } from 'react-bootstrap'

import skillsList from '../../data/skills.json'
import SkillBlock from './SkillBlock'
import Section from '../Base/Section'

export default function SkillsSection() {
  return (
    <Section id='skills' title='Навыки'>
      <Row className='g-5 justify-content-center'>
        {
          skillsList.map(skill => (
            <Col xs="12" md="6" lg="4" key={`skill-block-${skill.title}`}>
              <SkillBlock {...skill}/>
            </Col>
          ))
        }
      </Row>
    </Section>
  )
}
