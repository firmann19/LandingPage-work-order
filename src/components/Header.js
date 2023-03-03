import React from "react";
import imgheader from "../assets/image/bg-img.png"

function Header() {
  return (
    <div className="w-full flex gap-10 px-7 items-center bg-image bg-white p-10">
      <div className="w-1/2">
        <h1 className="fw-bold text-4xl text-text-hero">
          Work Order
          <br />
          The Best Service There is!
        </h1>
        <p className="text-lg text-justify my-8">
          Offers technological device repair services. Makes you feel most
          <br className="d-md-block d-none" />
          comfortable at work.
        </p>
        <button type="button" className="btn btn-danger">
          Get Started
        </button>
      </div>
      <div>
        <img src={imgheader} alt="hero" />
      </div>
    </div>
  );
}

export default Header;
