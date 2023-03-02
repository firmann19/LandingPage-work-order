import React from "react";

function CheckOutInput() {
  return (
    <form>
        <div className="mb-3 ms-3">
         <label for="NamaPeralatan" class="form-label">Nama Peralatan :</label>
       <input
        type="text"
        className="ms-2 col-auto bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        required
      />
      </div>

      <div className="mb-3 ms-3">
         <label for="KodePeralatan" class="form-label">Kode Peralatan :</label>
       <input
        type="text"
        className="ms-3 col-auto bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        required
      />
      </div>

      <div className="mb-3 ms-3">
         <label for="KodePeralatan" class="form-label">Waktu Orderan  :</label>
       <input
        type="text"
        className="ms-3 col-auto bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        required
      />
      </div>

      <div className="ms-3 items-center">
        <label for="TextInput" className="waktu">
          Permasalahan :
        </label>

        <textarea
          className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-primary md:text-xl lg:text-base "
          id="deskripsi-permasalahan"
          rows="4"
        />
      </div>
    </form>
  );
}

export default CheckOutInput;
