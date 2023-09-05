/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";
import TableHistoryOrder from "../components/TableHistoryOrder";

function HistoryOrder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div
        className="transactions overflow-auto h-screen"
        style={{ height: "100vh" }}
      >
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
                  href="/Close"
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
    </>
  );
}

export default HistoryOrder;
