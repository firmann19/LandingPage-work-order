/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ApproveInput from "../components/ApproveInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getData, putData } from "../utils/fetch";
import { Card } from "react-bootstrap";
import DetailApproval from "../components/DetailApproval";
import moment from "moment";
import { setNotif } from "../redux/notif/actions";
import { useDispatch } from "react-redux";

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
    otp: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);
    console.log("test", res);

    setForm({
      ...form,
      UserRequestId: res.data.data.userRequest.name,
      DepartUserId: res.data.data.Departement.nama,
      namaBarang: res.data.data.namaBarang,
      kodeBarang: res.data.data.kodeBarang,
      permasalahan: res.data.data.permasalahan,
      UserApproveId: res.data.data.userApprove.name,
      date_requestWO: moment(
        res.data.data.date_requestWO
      ).format("DD-MM-YYYY, h:mm:ss a"),
      StatusWO: res.data.data.StatusWO,
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

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
      StatusWO: form.StatusWO,
    };

    const res = await putData(`/statusWO/${id}`, payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil update status Work Order`
        )
      );
      navigate("/listwo");
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
    <section class="approval mx-auto">
      <div class="row">
        <div class="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <div class="container mx-auto">
            <div className="text-center">
              <ApproveInput
                form={form}
                isLoading={isLoading}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-lg-6 bg-blue pt-lg-145 pb-lg-145 d-lg-block d-none">
          <Card style={{ width: "80%" }} className="m-auto mt-5 mb-5">
            <Card.Body>
              <Card.Title className="text-center mb-5">Work Order</Card.Title>
              <DetailApproval form={form} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Approval;
