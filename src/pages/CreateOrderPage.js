import React, { useEffect, useState } from "react";
import CreateWoInput from "../components/CreateWoInput";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../utils/fetch";
import Navbar from "../components/Navbar";
import { fetchListsUserByDepartement } from "../redux/lists/actions";
import { toast } from "react-toastify";

function CreateOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [departement, setDepartement] = useState(null);
  const lists = useSelector((state) => state.lists);
  const [form, setForm] = useState({
    namaBarang: "",
    kodeBarang: "",
    permasalahan: "",
    UserApproveId: 0,
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchListsUserByDepartement());
    const fetchData = () => {
      let { user, departement } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setUser(user);
      setDepartement(departement);
    };
    fetchData();
  }, [dispatch]);

  const handleChange = async (e) => {
    if (e.target.name === "UserApproveId") {
      console.log("e.target.name");
      console.log(e.target.name);
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      UserRequestId: user,
      namaBarang: form.namaBarang,
      kodeBarang: form.kodeBarang,
      permasalahan: form.permasalahan,
      UserApproveId: form.UserApproveId.value,
    };

    console.log(payload)
    console.log("payload")

  await postData(`/checkout`, payload)
  .then((res) => {
    if (res.data.status === true) {
      toast.success(res.data.message);
      navigate("/complete-order");
      setIsLoading(false);
    } else {
      setIsLoading(true);
      alert({
        status: false,
        type: "danger",
        message: "gagal",
      });
    }
  })
  .catch((err) => console.log("ini errror", err));
};

  const handleChangeKeyPoint = (e, i) => {
    let _temp = [...form.keyPoint];

    _temp[i] = e.target.value;

    setForm({ ...form, keyPoint: _temp });
  };

  return (
    <div className="transactions overflow-auto h-screen">
      <Sidebar />
      <Navbar />
      <div className="responsive-form-checkout transactions mx-auto">
        <div id="create-wo">
          <h2 className="font-Philosopher font-bold text-6xl md:text-6xl lg:text-6xl text-center mt-3">
            Work Order
          </h2>
          <CreateWoInput
            user={user}
            departement={departement}
            form={form}
            isLoading={isLoading}
            lists={lists}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChangeKeyPoint={handleChangeKeyPoint}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateOrderPage;
