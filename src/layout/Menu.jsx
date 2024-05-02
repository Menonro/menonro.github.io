import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Menu() {
  const [expanded, setExpanded] = useState(false);
  const close = () => setExpanded(false)
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
          <Navbar.Brand as={Link} to="/#main">
            <h2 className='mb-0'>Menonro</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={close} as={Link} to="/#clients">Клиенты</Nav.Link>
              <Nav.Link onClick={close} as={Link} to="/#skills">Навыки</Nav.Link>
              <Nav.Link onClick={close} as={Link} to="/#contacts">Контакты</Nav.Link>
              {/* <Nav.Link onClick={close} as={Link} to="/#contacts">Контакты</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  )
}
