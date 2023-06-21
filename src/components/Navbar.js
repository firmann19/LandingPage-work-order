/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/image/logoHTA.png";
import React, { useEffect, useState } from "react";
import { BsBellFill, BsFillEnvelopeFill } from "react-icons/bs";
import "../styles/utilities.css";
import { Link, NavLink } from "react-router-dom";

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
      <nav className="navbar pe-3 ps-3 navbar-expand-lg navbar-light bg-light bg-white py-40">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="60" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto text-lg gap-lg-0 gap-2">
              <NavLink
                to="/dashboard"
                exact
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/history-order"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                History Order
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Blog
              </NavLink>
              <NavLink
                to="/support"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Support
              </NavLink>
            </ul>
            <ul className="navbar-nav">
              <div className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                  <a
                    className="dropdown-toggle text-decoration-none text-black me-lg-35"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello, {user}
                  </a>

                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                        onClick={() => handleLogout()}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li className="nav-item">
                <BsFillEnvelopeFill className="icon-1" />
              </li>
              <li className="nav-item ms-4">
                <BsBellFill className="icon-2" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
