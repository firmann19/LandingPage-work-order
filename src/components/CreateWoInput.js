import React from "react";
import { Link } from "react-router-dom";
import SButton from "./partikel/Button";
import SelectBox from "./partikel/SelectBox";
import { Col, Form, Row } from "react-bootstrap";
import TextInputWithLabel from "./partikel/TextInputWithLabel";
import { formatDate } from "../utils/formatDate";

function CreateWoInput({
  form,
  lists,
  handleChange,
  handleSubmit,
  isLoading,
  user,
  departement,
}) {
  return (
    <Form method="post" className="mx-auto w-50">
      <div className="text-gray-700 body-font relative">
        <div className="mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4 w-1/2">
              <div className="relative">
                <Form.Label>User</Form.Label>
                <Form.Control
                  name="name"
                  value={user}
                  type="text"
                  onChange={handleChange}
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className="p-4 w-1/2">
              <div className="relative">
                <Form.Label>Nama Peralatan</Form.Label>
                <Form.Control
                  name="namaBarang"
                  value={form?.namaBarang}
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="p-4 w-1/2">
              <div className="relative">
                <Form.Label>Departement</Form.Label>
                <Form.Control
                  name="departement"
                  value={departement}
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
                  name="kodeBarang"
                  value={form?.kodeBarang}
                  type="text"
                  onChange={handleChange}
                />
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
                value={form?.permasalahan}
                onChange={handleChange}
              />
            </div>
          </div>

         

          <div className="flex flex-wrap">
          <div className="p-4 w-1/2">
            <div className="relative">
              <SelectBox
                label={"Disetujui"}
                placeholder={"Pilih nama atasan"}
                name="UserApproveId"
                isClearable={true}
                value={form.UserApproveId}
                options={lists.users}
                handleChange={(e) => handleChange(e)}
              />
            </div>
          </div>
            <div className=" w-1/2">
              <div className="relative">
                <Form.Label>Tanggal Work Order</Form.Label>
                <TextInputWithLabel 
                  name="date_requestWO"
                  value={form?.date_requestWO}
                  type="datetime-local"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-25 mt-5">
        <Link to="/complete-order">
          <SButton
            className="w-100"
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit}
            variant="danger"
          >
            Submit
          </SButton>
        </Link>
      </div>
    </Form>
  );
}

export default CreateWoInput;
