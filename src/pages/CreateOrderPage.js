import React, { useEffect, useState } from "react";
import CreateWoInput from "../components/CreateWoInput";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchListsUser } from "../redux/lists/actions";
import { postData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";

function CreateOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [form, setForm] = useState({
    user: "",
    departement: "",
    kodePeralatan: "",
    permasalahan: "",
    disetujui: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchListsUser());
  }, [dispatch]);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {};

    const res = await postData("/checkout", payload);

    if (res.data.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Work Order telah dibuat oleh ${res.data.data.name}`
        )
      );
      navigate("/complete-order");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  const handleChangeKeyPoint = (e, i) => {
    let _temp = [...form.keyPoint];

    _temp[i] = e.target.value;

    setForm({ ...form, keyPoint: _temp });
  };

  return (
    <>
      <Sidebar />
      <div className="responsive-form-checkout mx-auto">
        <div id="create-wo" className="h-screen mx-auto">
          <h2 className="font-Philosopher font-bold text-6xl md:text-6xl lg:text-6xl text-center ">
            Work Order
          </h2>
          <CreateWoInput
            form={form}
            isLoading={isLoading}
            lists={lists}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeKeyPoint={handleChangeKeyPoint}
          />
        </div>
      </div>
    </>
  );
}

export default CreateOrderPage;
