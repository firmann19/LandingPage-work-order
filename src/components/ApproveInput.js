import React from "react";
import { Card, Form } from "react-bootstrap";
import SButton from "./partikel/Button";

function ApproveInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <>
      <Card
        className="bg-light"
        style={{ width: "30rem", height: "20rem" }}
      >
        <Card.Body>
          <h1 className=" font-bold text-4xl text-danger text-center mb-3">
            Approval
          </h1>
          <p className=" mt-2 mb-4 text-center text-black">
            Silahkan masukan kode otp untuk <br /> persetujuan Work Order.
          </p>
          <Form.Control
            name="otp"
            type="text"
            value={form?.otp}
            onChange={handleChange}
          />
          <SButton
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit}
            className="w-full bg-danger font-Quicksand text-white border-2 mt-4 rounded py-2 px-4 md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10"
          >
            Approval
          </SButton>
        </Card.Body>
      </Card>
    </>
  );
}

export default ApproveInput;
