import React from 'react';
import { Link } from "react-router-dom";
import iconkembali from "../assets/image/left.png";

const MaintenancePage = () => {
  return (
    <div className='container-maintenance'>
        <Link to="/" className="">
         <img src={iconkembali}alt="logo-hta" height="10" width="80" /> 
        </Link> 
        <h1>Comming soon..........</h1>
    </div>
  )
}

export default MaintenancePage