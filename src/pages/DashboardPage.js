import React from 'react';
import Sidebar from '../components/Sidebar';
import TableDashboard from '../components/TableDashboard';
import { Link } from "react-router-dom";
import serviceicon from "../assets/image/service.png";
import Notif from "../components/Notif";

const DashboardPage = () => {
  return (
    <div className="transactions overflow-auto h-screen">
    <Sidebar />
    <Notif />
    <main className="main-wrapper">
        <div className="ps-lg-0">
            <div className="row mt-30 mb-20">
                <div className="col-lg-12 col-12 main-content">
                    <h3 className='fw-bold mb-3'>Dashboard</h3>
                    <div className="kotak-order">
                        <Link to="/create-order">
                            <button className="btn-create-order">
                                <img src={serviceicon}alt="logo-hta" height="10" width="80" /> 
                                <p>Create Order</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
           <TableDashboard />
        </div>
    </main>
</div>
  )
}

export default DashboardPage