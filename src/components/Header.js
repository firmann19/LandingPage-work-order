import React from "react";
import ImgHeader from "../assets/image/img-header.png";

function Header() {
  return (
    <div className="w-full flex gap-10 px-7 items-center bg-image bg-white p-10">
      <div className="w-1/2">
        <h1 className="font-semibold text-5xl text-text-hero">
          Work Order
          <br />
          The Best Service There is!
        </h1>
        <p className="text-justify my-8">
          Offers technological device repair services. Makes you feel most
          comfortable at work.
        </p>
        <button type="button" className="btn btn-danger">
          Get Started
        </button>
      </div>
      <div>
        <img src={ImgHeader} alt="hero" />
      </div>
    </div>
  );
}

export default Header;
