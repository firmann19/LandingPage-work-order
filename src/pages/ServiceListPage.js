import React from "react";
import ServiceItem from "../components/ServiceItem";
import ImgSoftware from '../assets/image/service-1.png'
import PakHaris from '../assets/image/service-2-pakharis.png'
import { Link } from "react-router-dom";
import iconkembali from "../assets/image/left.png";

function ServiceList(props) {
  return (
    <div className=" px-6 items-center p-20 bg-slate-300">
      <div className="btn-kembali">
      <Link to="/" className="">
         <img src={iconkembali}alt="logo-hta" height="10" width="80" /> 
         </Link> 
      </div>
      <h1 className="text-5x2 font-bold text-center">Service</h1>
      <p className="font-semibold text-center my-6">
        Providing various repair services about information technology
      </p>
      <div className="flex flex-wrap">

      <div className=" w-1/2">
      <div className="relative">
      <div className="flex gap-18 mx-20 py-5 justify-center">
         <ServiceItem 
           img={ImgSoftware} 
           title="Repair Technology"
         />
         </div>
      </div>
      </div>

      <div className=" w-1/2">
      <div className="relative">
      <div className="flex gap-18 mx-20 py-5 justify-center">
         <ServiceItem 
           img={PakHaris} 
           title="Maintenance"
         /> 
        </div>
      </div>
      </div>

    </div>
</div>
  );
}

export default ServiceList;
