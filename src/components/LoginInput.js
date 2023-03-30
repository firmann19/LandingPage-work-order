/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/actions";

function loginInput({ form, handleChange, handleSubmit }) {
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    picture: "",
    departement: "",
    position: "",
    role: ""
  })

  const {name, email, password, picture, position, role} = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData()

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password)
    myForm.set("picture", picture)
    myForm.set("role", role)
    myForm.set("position", position)
  }

  return (
    <form className="loginForm" onSubmit={loginSubmit}>
      <input
        type="email"
        className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10"
        placeholder="Email"
        name="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10"
        placeholder="Password"
        minLength={6}
        value= {loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
      />
      <button
        className="w-full bg-danger font-Quicksand text-white border-2 mt-2 rounded py-2 px-4 hover:bg-primaryHover md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10"
        type="submit"
        value="Login"
      >
        Login
      </button>
    </form>
  );
}

export default loginInput;
