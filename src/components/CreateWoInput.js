import React from "react";
import { Link } from "react-router-dom";
import SButton from "./partikel/Button";
import SelectBox from "./partikel/SelectBox";
import { Col, Form, Row } from "react-bootstrap";

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
    <Form method="post" className="form-create-wo">
      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label>User</Form.Label>
          <Form.Control
            name="name"
            value={user}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label>Nama Peralatan</Form.Label>
          <Form.Control
            name="namaBarang"
            value={form?.namaBarang}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label>Departemen</Form.Label>
          <Form.Control
            name="departement"
            value={departement}
            type="text"
            onChange={handleChange}
            disabled
            readOnly
          />
        </Col>

        <Col className="me-3">
          <Form.Label>Kode Peralatan</Form.Label>
          <Form.Control
            name="kodeBarang"
            value={form?.kodeBarang}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Form.Group className="mb-3 ms-3 me-3">
        <Form.Label>Permasalahan</Form.Label>
        <Form.Control
          id="permasalahan"
          as="textarea"
          name= "permasalahan"
          rows={3}
          value={form?.permasalahan}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="mt-4 ms-3" style={{ width: "30%" }}>
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

      <div className="m-auto mt-3 mb-3" style={{width: "25%"}}>
          <SButton
            className="w-100"
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit}
            variant="danger"
          >
            Submit
          </SButton>
      </div>
    </Form>
  );
}

export default CreateWoInput;
