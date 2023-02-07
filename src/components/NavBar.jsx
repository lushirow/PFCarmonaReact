import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
          <Link to="/">Bizarre Shop</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/category/gaseosas">Gaseosas</Link>
            <Link to="/category/alcohol">Bebidas con Alcohol</Link>
          </Nav>   
          <CartWidget/>
        </Container>
      </Navbar>
  );
}

export default NavBar