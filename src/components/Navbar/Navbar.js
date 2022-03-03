import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/logo.png';
//import './Navbar.css';

const NavBar = () => (
  <Navbar collapseOnSelect expand='lg' bg='light' variant='light' fluid='true'>
    <Navbar.Brand>
      <img src={logo} className='ARC-logo' alt='American Red Cross Logo' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title='Classes' id='classes-dropdown'>
          <LinkContainer to='/classes/emr'>
            <Nav.Link>Emergency Medical Response</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/classes/wrfa'>
            <Nav.Link>Wilderness & Remote First Aid</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/classes/cpr'>
            <Nav.Link>First Aid/CPR/AED</Nav.Link>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to='/about'>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/calendar'>
          <Nav.Link>Events</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/gallery'>
          <Nav.Link>Gallery</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contactus'>
          <Nav.Link>Contact Us</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
