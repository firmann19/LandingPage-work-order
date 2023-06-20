/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ApproveInput from "../components/ApproveInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getData, putData } from "../utils/fetch";
import { toast } from "react-toastify";
import SAlert from "../components/partikel/Alert";
import { Card } from "react-bootstrap";
import DetailApproval from "../components/DetailApproval";
import { useDispatch } from "react-redux";
import moment from "moment";

function Approval() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({
    UserRequestId: 0,
    DepartUserId: 0,
    namaBarang: "",
    kodeBarang: "",
    permasalahan: "",
    UserApproveId: 0,
    date_requestWO: "",
    StatusWO: "",
    otp: ""
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);
    console.log("test", res)
    
    setForm({
      ...form,
      UserRequestId: res.data.data.getCheckout_ById.UserRequestId,
      DepartUserId: res.data.data.getCheckout_ById.DepartUserId,
      namaBarang: res.data.data.getCheckout_ById.namaBarang,
      kodeBarang: res.data.data.getCheckout_ById.kodeBarang,
      permasalahan: res.data.data.getCheckout_ById.permasalahan,
      UserApproveId: res.data.data.getCheckout_ById.UserApproveId,
      date_requestWO: moment(res.data.data.getCheckout_ById.date_requestWO).format("DD-MM-YYYY, h:mm:ss a"),
      StatusWO: res.data.data.getCheckout_ById.StatusWO,
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, [])

  async function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      UserRequestId: form.UserRequestId,
      DepartUserId: form.DepartUserId,
      namaBarang: form.namaBarang,
      kodeBarang: form.kodeBarang,
      permasalahan: form.permasalahan,
      UserApproveId: form.UserApproveId,
      date_requestWO: form.date_requestWO,
      otp: form.otp,
      StatusWO: form.StatusWO
    };

    await putData(`/statusWO/${id}`, payload)
      .then((res) => {
        if (res.data.status === true) {
          toast.success(`Berhasil update Status Work Order`);
          navigate("/listwo-page");
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

  return (
    <section id="approval" className="h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:h-full">
        <div className="w-full self-center p-8 md:h-3/5 lg:w-2/5">
          <div className="m-auto text-center" style={{ width: "100%" }}>
            {alert.status && (
              <SAlert type={alert.type} message={alert.message} />
            )}
          </div>
          <h1 className="font-Philosopher font-bold text-4xl text-danger md:text-6xl lg:text-4xl text-center mb-3">
            Approval
          </h1>
          <p className="font-Quicksand mt-2 mb-4 md:text-lg lg:text-base text-center">
            Silahkan masukan kode otp untuk persetujuan Work Order.
          </p>
          <div className="text-center ms-5">
          <ApproveInput
            form={form}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          </div>
        </div>
        <div className="w-full bg-slate-50 flex items-center md:h-2/5 lg:w-3/5 lg:h-full">
          <Card style={{ width: "60%" }} className="m-auto mt-5 mb-5">
          <Card.Body>
            <Card.Title className="text-center">Data Work Order User</Card.Title>
            <p className="text-center">Please update status Work Order User </p>
            <DetailApproval
              form={form}
            />
          </Card.Body>
        </Card>
          </div>
        </div>
    </section>
  );
}

export default Approval;
