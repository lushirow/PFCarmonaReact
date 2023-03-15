import React from 'react';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
// import Link from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar expanded={expanded} className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand className="swirl-in-fwd"><img className="navbar-brand" src={logo} width="100px" height="110px" alt="logo" /></Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Menú" id="basic-nav-dropdown">
        <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>  
        <LinkContainer onClick={() => setExpanded(false)} to="/category/alcohol"><NavDropdown.Item>Alcohol</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/gaseosas"><NavDropdown.Item>Gaseosas</NavDropdown.Item></LinkContainer>
        <LinkContainer onClick={() => setExpanded(false)} to="/category/aguas"><NavDropdown.Item>Aguas</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <LinkContainer onClick={() => setExpanded(false)} to="/contacto"><Nav.Link href="/contacto">Contacto</Nav.Link></LinkContainer>
      </Nav>  
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;