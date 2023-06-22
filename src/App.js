import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreateOrderPage from "./pages/CreateOrderPage";
import CompleteOrder from "./pages/CompleteOrder";
import LoginPage from "./pages/LoginPage";
import HistoryOrder from "./pages/HistoryOrder";
import HistoryOrderDetail from "./pages/HistoryOrderDetail";
import DashboardPage from "./pages/DashboardPage";
import { listen } from "./redux/listener";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListWO from "./pages/ListWO";
import Approval from "./pages/Approval";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/history-order" element={<HistoryOrder />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/listwo" element={<ListWO />} />
        <Route path="/listwo/approval/:id" element={<Approval />} />
        <Route
          path="/history-order/history-order-detail/:id"
          element={<HistoryOrderDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
