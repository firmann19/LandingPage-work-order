import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/image/logo-hta.png";

function Navigation() {
  return (
    <Navbar  className="navigation bg-slate-300">
      <Container>
        <div className="navbar-logo">
          <img src={NavbarLogo} alt="logo-hta" height="80" width="35" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default Navigation