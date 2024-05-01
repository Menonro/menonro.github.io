import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Menu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{
        translateY: -100,
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1
      }}
      >
      <Navbar
        fixed='top'
        expand="lg"
        variant='dark'
        expanded={expanded}
        style={{
          backdropFilter: 'blur(15px)',
        }}
        >
        <Container fluid className='g-5'>
          <Navbar.Brand href="#home">
            <h2>Menonro</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Компетенции</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contacts">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  )
}