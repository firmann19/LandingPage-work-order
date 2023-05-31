import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsList,
  BsFillHouseDoorFill,
  BsClockHistory,
  BsPersonFillGear,
} from "react-icons/bs";
import "../styles/componentstyle/sidebar.css";
import LogoHTA from "../assets/image/logo-hta.png";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <BsFillHouseDoorFill />,
    },
    {
      path: "/history-order-page",
      name: "History Order",
      icon: <BsClockHistory />,
    },
    {
      path: "/profile-setting",
      name: "Profile Setting",
      icon: <BsPersonFillGear />,
    },
  ];

  return (
    <div className="container-sidebar">
      <div className="sidebar" style={{ width: isOpen ? "250px" : "50px" }}>
        <div className="top_section">
          <img
            src={LogoHTA}
            height="60"
            width="60"
            className="logo"
            style={{ display: isOpen ? "block" : "none" }}
          />
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <BsList onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
