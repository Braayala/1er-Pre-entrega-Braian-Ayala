import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Computadoras</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Celulares</Nav.Link>
            <Nav.Link href="#features">Tablets</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>


          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar