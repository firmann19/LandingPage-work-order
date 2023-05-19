/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BsBellFill, BsFillEnvelopeFill } from "react-icons/bs";
import "../styles/utilities.css";

function Navbar() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    const fetchData = () => {
      let {user} = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {}
      
      setUser(user)
    };
    fetchData()
  }, [])

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white static-top shadow pb-3">
        <ul className="navbar-nav ml-auto pt-2">
          <li className="nav-item mx-1">
            <BsFillEnvelopeFill className="icon-1"/>
          </li>
          <li class="nav-item mx-3">
            <BsBellFill className="icon-2" />
          </li>
          <h2 className="text-lg fw-medium color-palette-1 me-3"> Hello, {user}</h2>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
