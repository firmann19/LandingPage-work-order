import React from "react";
import { Link } from "react-router-dom";
import SButton from "./partikel/Button";
import SelectBox from "./partikel/SelectBox";

function CreateWoInput({ form, lists, handleChange, handleSubmit, isLoading, user, departement }) {
  return (
    <form className="mx-auto w-50">
      <div className="text-gray-700 body-font relative">
        <div className="mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4 w-1/2">
              <div className="relative">
                <label
                  for="name"
                  className="leading-7 text-sm text-gray-600 fw-bold"
                >
                  User
                </label>
                <input
                  type="text"
                  value={user}
                  onChange={handleChange}
                  name="user"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-4 w-1/2">
              <div className="relative">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600 fw-bold"
                >
                  Nama Peralatan
                </label>
                <input
                  type="text"
                  value={form?.namaPeralatan}
                  onChange={handleChange}
                  name="namaPeralatan"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="p-4 w-1/2">
              <div className="relative">
                <label
                  for="name"
                  className="leading-7 text-sm text-gray-600 fw-bold"
                >
                  Departement
                </label>
                <input
                  type="text"
                  id="departement"
                  name="departement"
                  value={departement}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-4 w-1/2">
              <div className="relative">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600 fw-bold"
                >
                  Kode Peralatan
                </label>
                <input
                  type="text"
                  id="kodePeralatan"
                  name="kodePeralatan"
                  value={form?.kodePeralatan}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="p-4 w-full">
            <div className="relative">
              <label
                for="message"
                className="leading-7 text-sm text-gray-600 fw-bold"
              >
                Permasalahan
              </label>
              <textarea
                id="permasalahan"
                name="permasalahan"
                value={form?.permasalahan}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          
            <div className="p-4 w-1/3">
              <div className="relative">
                <SelectBox
                  label={"Disetujui"}
                  placeholder={"Pilih nama atasan"}
                  name="Disetujui"
                  isClearable={true}
                  value={form.user}
                  options={lists.users}
                  handleChange={(e) => handleChange(e)}
                />
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
    </form>
  );
}

export default CreateWoInput;
