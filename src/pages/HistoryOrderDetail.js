/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import HistoryWOInput from "../components/DetailWOInput";
import { getData } from "../utils/fetch";
import moment from "moment";

function HistoryOrderDetail() {
  const { id } = useParams();
  const [form, setForm] = useState({
    UserRequestId: "",
    DepartUserId: "",
    namaBarang: "",
    kodeBarang: "",
    permasalahan: "",
    UserApproveId: "",
    date_requestWO: "",
    tindakan: "",
    gantiSparepart: "",
    HeadITid: "",
    User_IT: "",
    date_completionWO: "",
  });

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);

    setForm({
      ...form,
      UserRequestId: res.data.data.userRequest.name,
      DepartUserId: res.data.data.Departement.nama,
      namaBarang: res.data.data.namaBarang,
      kodeBarang: res.data.data.kodeBarang,
      permasalahan: res.data.data.permasalahan,
      UserApproveId: res.data.data.userApprove.name,
      date_requestWO: moment(res.data.data.date_requestWO).format("DD-MM-YYYY, h:mm:ss a"),
      tindakan: res.data.data.tindakan,
      gantiSparepart: res.data.data.gantiSparepart,
      HeadITid: res.data.data.HeadIT.name,
      User_IT: res.data.data.userIT.name,
      date_completionWO: moment(res.data.data.date_completionWO).format("DD-MM-YYYY, h:mm:ss a"),
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  return (
    <div
      className="transactions-detail overflow-auto h-screen"
    >
      <div className="w-full">
        <Navbar />
        <Card style={{ width: "60%" }} className="m-auto mt-5 mb-5">
          <Card.Body>
            <Card.Title className="text-center mb-5">Order Details</Card.Title>
            <HistoryWOInput
              form={form}
            />
          </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default HistoryOrderDetail;
