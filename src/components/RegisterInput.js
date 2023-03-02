import React from "react";

function RegisterInput() {
  return (
    <form>
      <input
        type="email"
        className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        placeholder="Fullname"
        required
      />
      <input
        type="email"
        className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        placeholder="Username"
        required
      />
      <input
        type="password"
        className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10"
        placeholder="Password"
        minLength={6}
        required
      />
      <button className="w-full bg-danger font-Quicksand text-white border-2 mt-2 rounded py-2 px-4 hover:bg-primaryHover md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10" type="button">Login</button>
    </form>
  );
}


export default RegisterInput;
