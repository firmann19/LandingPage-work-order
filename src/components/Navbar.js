/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BsBellFill, BsFillEnvelopeFill } from "react-icons/bs";
import "../styles/utilities.css";

function Navbar() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = () => {
      let { user } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setUser(user);
    };
    fetchData();
  }, []);

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white static-top shadow pb-3">
        <ul className="navbar-nav ml-auto pt-2 me-5 pe-4">
          <li className="nav-item mx-1 pt-2">
            <BsFillEnvelopeFill className="icon-1" />
          </li>
          <li className="nav-item ms-2 me-3 pt-2">
            <BsBellFill className="icon-2" />
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link align-items-center text-lg fw-medium color-palette-1 dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hello, {user}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  About Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Help & Privacy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleLogout()}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
