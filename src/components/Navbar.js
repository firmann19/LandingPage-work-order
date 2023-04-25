/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsBellFill, BsFillEnvelopeFill } from "react-icons/bs";
import "../styles/utilities.css";

function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white static-top shadow">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <BsFillEnvelopeFill height="80" width="80"/>
          </li>
          <li class="nav-item dropdown no-arrow mx-3">
            <BsBellFill />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
