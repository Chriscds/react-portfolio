import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles/Navbar.css';



function NavigationBar() {
    return (
        <Navbar  expand="lg" className="">
      <Container className="navStyle" >
        <Navbar.Brand className="brandName" href="#home">Chris Southon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="linkFont" href="#home">Home</Nav.Link>
            <Nav.Link className="linkFont" href="#link">Projects</Nav.Link>
            <Nav.Link className="linkFont" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default NavigationBar;