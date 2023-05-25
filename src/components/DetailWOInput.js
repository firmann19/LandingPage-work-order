import React from "react";
import { Form } from "react-bootstrap";

function HistoryWOInput({ form, lists, handleChange }) {
  return (
    <Form method="post" className="form-register">
      <div className="flex flex-wrap">
        <div className="p-4 w-1/2">
          <div className="relative">
            <Form.Label>Nama Peralatan</Form.Label>
            <Form.Control
              name="namaBarang"
              value={form?.namaBarang}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="relative">
            <Form.Label>Kode Peralatan</Form.Label>
            <Form.Control
              name="KodeBarang"
              value={form?.kodeBarang}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="p-4 w-full">
        <div className="relative">
          <Form.Label>Permasalahan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form?.permasalahan}
            disabled
            readOnly
          />
        </div>
      </div>

      <div className="p-4 w-full">
        <div className="relative">
          <Form.Label>Tindakan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="tindakan"
            name="tindakan"
            value={form?.tindakan}
            onChange={handleChange}
            disabled
            readOnly
          />
        </div>
      </div>

      <div className="p-4 w-full">
        <div className="relative">
          <Form.Label>Sparepart yang diganti</Form.Label>
          <Form.Control
            id="gantiSparepart"
            name="gantiSparepart"
            value={form?.gantiSparepart}
            onChange={handleChange}
            as="textarea"
            rows={3}
            disabled
            readOnly
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
            <Form.Control
              name="UserRequestId"
              value={form?.UserRequestId}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="relative">
            <Form.Label>Departemen</Form.Label>
            <Form.Control
              name="DepartUserId"
              value={form?.DepartUserId}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="p-4 w-1/2">
          <div className="relative">
            <Form.Label>Waktu Order</Form.Label>
            <Form.Control
              name="date_requestWO"
              value={form?.date_requestWO}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="relative">
            <Form.Label>Waktu Penyelesaian</Form.Label>
            <Form.Control
              name="date_completionWO"
              value={form?.date_completionWO}
              type="text"
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default HistoryWOInput;
