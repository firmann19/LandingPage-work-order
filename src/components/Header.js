import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='landingpage'>
        <div className='tulisanlanding'>
            <h1>Work Order System</h1>
            <h2>The Best Service Therere is!</h2>
            <p>Offers technological device repair services. Makes you feel most comfortable at work.</p>

            <Link to="/service">
                <button className="button-landing">
                   Service
                </button>
            </Link>
        </div>
    </div>
  );
}

export default Header;
