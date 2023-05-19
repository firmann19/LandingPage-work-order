/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TableHistoryOrder from "../components/TableHistoryOrder";
import Navbar from "../components/Navbar";
import SidebarNew from "../components/SidebarNew";
import { Form } from "react-bootstrap";

function HistoryOrder() {
  return (
    <div
      className="transactions overflow-auto h-screen"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SidebarNew />
      <div className="w-full">
        <Navbar />
        <div className="p-5">
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <a
                data-filter="*"
                href="#"
                className="btn btn-status rounded-pill text-sm btn-active me-3"
              >
                All Order
              </a>
              <a
                data-filter="success"
                href="#"
                className="btn btn-status rounded-pill text-sm me-3"
              >
                Success
              </a>
              <a
                data-filter="pending"
                href="#"
                className="btn btn-status rounded-pill text-sm me-3"
              >
                Pending
              </a>
            </div>
          </div>
        </div>
        <TableHistoryOrder />
        </div>
      </div>
    </div>
  );
}

export default HistoryOrder;
