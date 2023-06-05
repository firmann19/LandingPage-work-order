import React, { useEffect } from "react";
import Table from "../components/partikel/TableWithAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";

function TableDashboard() {
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts);
  console.log("Look",checkouts)

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, [dispatch]);

  return (
    <div className="latest-transaction">
      <p className="text-lg fw-bold color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <Table
          status={checkouts.status}
          thead={["Nama", "Departement", "Peralatan", "Kode", "Status"]}
          data={checkouts.data}
          tbody={[
            "UserRequestId",
            "kodeBarang",
            "namaBarang",
            "DepartUserId",
            "StatusPengerjaan",
          ]}
        />
      </div>
    </div>
  );
}

export default TableDashboard;
