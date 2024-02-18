import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function MyNav() {
  const amount = useSelector(state=> state.amount);
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
              <Link  className='mx-5' to={'signup'}>User Profile</Link>
            </Nav.Link>
          <Nav.Link >
              <Link  className='ml-auto' to={'signup'}>Signup Here</Link>
            </Nav.Link>
            <div>
        <button className="btn align-content-end mx-5 btn-primary ">My Cart : {amount}</button>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
