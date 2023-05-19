import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarNew from "../components/SidebarNew";
import { Card, Form } from "react-bootstrap";

function HistoryOrderDetail() {
  return (
    <div
      className="transactions-detail overflow-auto h-screen"
      style={{ display: "flex", height: "130vh", overflow: "scroll initial" }}
    >
      <SidebarNew />
      <div className="w-full">
        <Navbar />

        <div className="p-5">
          <Card>
            <h2 className="fw-bold text-xl color-palette-1 mb-20 ps-3 pt-3">
              Order Details
            </h2>
            <div className="flex flex-wrap">
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Nama Peralatan</Form.Label>
                  <Form.Control name="name" type="text" />
                </div>
              </div>
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Kode Peralatan</Form.Label>
                  <Form.Control name="namaBarang" type="text" />
                </div>
              </div>
            </div>

            <div className="p-4 w-full">
              <div className="relative">
                <Form.Label>Permasalahan</Form.Label>
                <Form.Control
                  id="permasalahan"
                  as="textarea"
                  name="permasalahan"
                  rows={3}
                />
              </div>
            </div>

            <div className="p-4 w-full">
              <div className="relative">
                <Form.Label>Saran Teknisi</Form.Label>
                <Form.Control
                  id="permasalahan"
                  as="textarea"
                  name="permasalahan"
                  rows={3}
                />
              </div>
            </div>

            <h2 className="fw-bold text-xl color-palette-1 mb-20 ps-3 pt-3">
              Informasi Pengguna
            </h2>
            <div className="flex flex-wrap">
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Nama Pengguna</Form.Label>
                  <Form.Control name="name" type="text" />
                </div>
              </div>
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Departemen</Form.Label>
                  <Form.Control name="namaBarang" type="text" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Waktu Order</Form.Label>
                  <Form.Control name="name" type="text" />
                </div>
              </div>
              <div className="p-4 w-1/2">
                <div className="relative">
                  <Form.Label>Waktu Penyelesaian</Form.Label>
                  <Form.Control name="namaBarang" type="text" />
                </div>
              </div>
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
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HistoryOrderDetail;
