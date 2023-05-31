import React from "react";
import { Form } from "react-bootstrap";
import SButton from "./partikel/Button";
import TextInputWithLabel from "./partikel/TextInputWithLabel";

function ProfileInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form className="mx-auto w-25">
      <TextInputWithLabel
        placeholder={"Masukan nama..."}
        label={"Nama Lengkap"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <SButton
        variant="danger"
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        className="w-100"
      >
        Save My Profile
      </SButton>
    </Form>
  );
}

export default ProfileInput;
