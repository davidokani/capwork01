import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
/**import { Link } from "react-router-dom";**/
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="mywhite" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="piggy-vest" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-5">
            <Nav.Link href="#home">Save</Nav.Link>
            <Nav.Link href="#link">Invest</Nav.Link>
            <Nav.Link href="#link">Stories</Nav.Link>
            <Nav.Link href="#link">FAQs</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>

          </Nav>
          <Nav>

            <Nav.Link className="px-4 login" eventKey={2} href="/signin">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarComponent;
