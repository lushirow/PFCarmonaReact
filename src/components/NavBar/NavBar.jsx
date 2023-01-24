import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Bizarre Shop
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas</Nav.Link>
            <Nav.Link href="#features">Hombres</Nav.Link>
            <Nav.Link href="#pricing">Mujeres</Nav.Link>
          </Nav>
          <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar