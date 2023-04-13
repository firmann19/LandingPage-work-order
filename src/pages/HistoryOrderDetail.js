import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function HistoryOrderDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <Navbar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Order Details
          </h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div>
                    <p className="fw-medium text-center label pending m-0 rounded-pill">
                      Pending
                    </p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Order Details
                  </h2>
                  <p className="text-lg color-palette-1 mb-20">
                    Nama Peralatan{" "}
                    <span className="purchase-details">Monitor</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Kode Peralatan{" "}
                    <span className="purchase-details">ASTG123</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Permasalahan{" "}
                    <span className="purchase-details">
                      Monitor tidak bisa menyala
                    </span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Saran Teknisi
                    <span className="purchase-details">
                      Matikan Komputer dengan benar supaya tidak error
                    </span>
                  </p>
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    User Informations
                  </h2>
                  <p className="text-lg color-palette-1 mb-20">
                    Nama{" "}
                    <span className="purchase-details">Firman Ramadhan</span>
                  </p>
                  <p className="text-lg color-palette-1 mb-20">
                    Departemen{" "}
                    <span className="purchase-details">Information Technology</span>
                  </p>
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <Link
                    className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                    href="#"
                    role="button"
                  >
                    WhatsApp ke Admin
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default HistoryOrderDetail;
