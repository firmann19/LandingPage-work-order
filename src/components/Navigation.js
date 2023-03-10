import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/image/logo-hta.png";

function Navigation() {
  return (
    // <Navbar  className="navigation bg-slate-300">
    //   <Container>
    //     <Link to="/" className="navbar-logo">
    //       <img src={NavbarLogo} alt="logo-hta" height="100" width="80" />
    //     </Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="ms-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#services">Services</Nav.Link>
    //       <Nav.Link href="#ContactUs.js.">Contact Us</Nav.Link>
    //       <Link to="/login-page">
    //         <button className="w-28 h-9 rounded-full text-l font-medium bg-danger text-white">
    //           Login
    //         </button>
    //       </Link>
    //       <Link to="/register-page">
    //         <button className="ms-3 w-28 h-9 rounded-full text-l font-medium bg-white text-black">
    //           Register
    //         </button>
    //       </Link>
    //     </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={NavbarLogo} alt="logo-hta" height="100" width="80" />
        </Navbar.Brand>
        <Navbar.Brand>
          <strong>HTA INDONESIA INDONESIA</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='me-2 text-white'>Home</Nav.Link>
            <Nav.Link as={Link} to="/" className='me-2 text-white'>Services</Nav.Link>
            <Nav.Link as={Link} to="/" className='me-2 text-white'>Contact Us</Nav.Link>
            <Link to="/login-page">
              <button className="w-28 h-9 rounded-full text-l font-medium bg-danger text-white">
                Login
              </button>
            </Link>
            <Link to="/register-page">
              <button className="ms-3 w-28 h-9 rounded-full text-l font-medium bg-white text-black">
                Register
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation