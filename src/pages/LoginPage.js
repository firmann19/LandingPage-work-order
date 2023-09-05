/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/image/computer.png";
import LogoImg from "../assets/image/logoHTA.png";
import LoginInput from "../components/LoginInput";
import { userLogin } from "../redux/auth/actions";
import { postData } from "../utils/fetch";
import SAlert from "../components/partikel/Alert";

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
    const res = await postData("/auth/signin", form);
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.user,
          res.data.data.departementId,
          res.data.data.departement,
          res.data.data.id
        )
      );

      setIsLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  return (
    <section class="sign-in mx-auto">
      <div class="row">
        <div class="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div class="container mx-auto">
            <div className="" style={{ width: "100%", textAlign: 'center' }}>
              {alert.status && (
                <SAlert type={alert.type} message={alert.message} />
              )}
            </div>
            <div class="pb-50">
              <a class="navbar-brand" href="../index.html">
                <img src={LogoImg} width="80" height="80" />
              </a>
            </div>
            <h2 class="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p class="text-lg color-palette-1 m-0">
              Masuk untuk melakukan proses order
            </p>
            <LoginInput
              form={form}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div class="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img
            src={LoginImg}
            width="502"
            height="391.21"
            class="img-fluid pb-50"
            alt=""
          />
          <h2 class="text-4xl fw-bold text-white mb-30">
            Technology wears you out.
            <br />
            we make you happy.
          </h2>
          <p class="text-white m-0">
            Kami siap melayani apa yang Anda butuhkan
            <br /> untuk bekerja dengan bahagia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
