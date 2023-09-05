import React, { useEffect, useState } from "react";
import CreateWoInput from "../components/CreateWoInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../utils/fetch";
import Navbar from "../components/Navbar";
import { fetchListsUserByDepartement } from "../redux/lists/actions";
import { Card } from "react-bootstrap";
import SAlert from "../components/partikel/Alert";
import { setNotif } from "../redux/notif/actions";

function CreateOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [departementId, setDepartementId] = useState(null);
  const [departement, setDepartement] = useState(null);
  const [id, setId] = useState(null);
  const lists = useSelector((state) => state.lists);
  const [form, setForm] = useState({
    namaBarang: "",
    kodeBarang: "",
    permasalahan: "",
    date_requestWO: "",
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
      let { user, departementId, departement, id } = localStorage.getItem(
        "auth"
      )
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setUser(user);
      setDepartementId(departementId);
      setDepartement(departement);
      setId(id);
    };
    fetchData();
  }, [dispatch]);

  const handleChange = async (e) => {
    if (e.target.name === "UserApproveId") {
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      namaBarang: form.namaBarang,
      kodeBarang: form.kodeBarang,
      permasalahan: form.permasalahan,
      date_requestWO: form.date_requestWO,
      UserApproveId: form.UserApproveId.value,
      UserRequestId: id,
      DepartUserId: departementId,
    };

    const res = await postData(`/checkout`, payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil create Work Order`
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

  return (
    <div
      className="transactions overflow-auto h-screen"
      style={{ height: "100vh" }}
    >
      <Navbar />
      <div className="pt-lg-100 pb-4 responsive-form-checkout transactions mx-auto">
        <div className="m-auto" style={{ width: "50%" }}>
          {alert.status && <SAlert type={alert.type} message={alert.message} />}
        </div>
        <Card style={{ width: "50%" }} className="m-auto">
          <h2 className="fw-bold text-xxl color-palette-1 text-center mt-3">
            Work Order
          </h2>
          <div>
            <CreateWoInput
              user={user}
              departement={departement}
              form={form}
              isLoading={isLoading}
              lists={lists}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CreateOrderPage;
