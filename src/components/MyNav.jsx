import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function MyNav() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'home'}>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={'alma/contact'}>Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/products/12'}>Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'alma/help'}>Help</Link>
            </Nav.Link>
          </Nav>
          <Nav.Link >
              <Link  className='ml-auto' to={'signup'}>Signup Here</Link>
            </Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}
