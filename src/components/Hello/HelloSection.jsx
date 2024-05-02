import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserCard from './UserCard'

export default function HelloSection() {
  return (
    <Container id='main'>
      <UserCard />
    </Container>
  )
}
