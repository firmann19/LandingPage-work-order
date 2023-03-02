import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< HEAD
import NavbarLogo from "../assets/image/logo-HTA.png";
=======
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import NavbarLogo from "../assets/image/logo-hta.png";
>>>>>>> 530c0a99889ddff3a84c862bdb278421e587f23f

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="bg-slate-300">
      <Container>
        <div className="navbar-logo">
          <img src={NavbarLogo} alt="logo-hta" height="80" width="35" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
<<<<<<< HEAD
          <Link to="/login-page">
=======
          <Link to="/login">
>>>>>>> 530c0a99889ddff3a84c862bdb278421e587f23f
            <button className="w-28 h-9 rounded-full text-l font-medium bg-danger text-white">
              Login
            </button>
          </Link>
<<<<<<< HEAD
          <Link to="/register-page">
=======
          <Link to="/register">
>>>>>>> 530c0a99889ddff3a84c862bdb278421e587f23f
            <button className="ms-3 w-28 h-9 rounded-full text-l font-medium bg-white text-black">
              Register
            </button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

<<<<<<< HEAD
export default Navigation
=======
export default Navigation;
>>>>>>> 530c0a99889ddff3a84c862bdb278421e587f23f
