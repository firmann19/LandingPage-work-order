import React from "react";
import { Link } from "react-router-dom";
import serviceicon from "../assets/image/service.png";
import Navbar from "../components/Navbar";
import TableDashboard from "../components/TableDashboard";

const DashboardPage = () => {
  return (
    <div
      className=" transactions overflow-auto h-screen"
      
    >
      <div className="w-full">
        <Navbar />
        <div className="p-5">
          <h3 className="fw-bold pb-4">Dashboard</h3>
          <div className="kotak-order pb-5">
            <Link to="/create-order">
              <button className="btn-create-order zoom-effect">
                <img
                  src={serviceicon}
                  className=""
                  alt="logo-hta"
                  height="10"
                  width="80"
                />
                <p>Create Order</p>
              </button>
            </Link>
          </div>

         {/* <TableDashboard /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
