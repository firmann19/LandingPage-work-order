/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import HistoryWOInput from "../components/DetailWOInput";
import { getData } from "../utils/fetch";

function HistoryOrderDetail() {
  const { id } = useParams();
  const [form, setForm] = useState({
    UserRequestId: 0,
    DepartUserId: 0,
    namaBarang: "",
    kodeBarang: "",
    permasalahan: "",
    UserApproveId: 0,
    date_requestWO: "",
    tindakan: "",
    gantiSparepart: "",
    HeadITid: 0,
    UserIT: 0,
    date_completionWO: "",
  });

  const fetchOneWO = async () => {
    const res = await getData(`/checkout/${id}`);

    setForm({
      ...form,
      UserRequestId: res.data.data.getCheckout_ById.UserRequestId,
      DepartUserId: res.data.data.getCheckout_ById.DepartUserId,
      namaBarang: res.data.data.getCheckout_ById.namaBarang,
      kodeBarang: res.data.data.getCheckout_ById.kodeBarang,
      permasalahan: res.data.data.getCheckout_ById.permasalahan,
      UserApproveId: res.data.data.getCheckout_ById.UserApproveId,
      date_requestWO: res.data.data.getCheckout_ById.date_requestWO,
      tindakan: res.data.data.getCheckout_ById.tindakan,
      gantiSparepart: res.data.data.getCheckout_ById.gantiSparepart,
      HeadITid: res.data.data.getCheckout_ById.HeadITid,
      UserIT: res.data.data.getCheckout_ById.UserIT,
      date_completionWO: res.data.data.getCheckout_ById.date_completionWO,
    });
  };

  useEffect(() => {
    fetchOneWO();
  }, []);

  return (
    <div
      className="transactions-detail overflow-auto h-screen"
      style={{ display: "flex", height: "160vh", overflow: "scroll initial" }}
    >
      <div className="w-full">
        <Navbar />

        <div className="p-5">
          <Card>
            <h2 className="fw-bold text-xl color-palette-1 mb-20 ps-3 pt-3">
              Order Details
            </h2>
            <HistoryWOInput form={form} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HistoryOrderDetail;
