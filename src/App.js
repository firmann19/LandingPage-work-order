import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreateOrderPage from "./pages/CreateOrderPage";
import CompleteOrder from "./pages/CompleteOrder";
import LoginPage from "./pages/LoginPage";
import HistoryOrder from "./pages/HistoryOrder";
import HistoryOrderDetail from "./pages/HistoryOrderDetail";
import DashboardPage from "./pages/DashboardPage";
import { listen } from "./redux/listener";
import ProfilePage from "./pages/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/history-order-page" element={<HistoryOrder />} />
        <Route
          path="/history-order-page/history-order-detail-page/:id"
          element={<HistoryOrderDetail />}
        />
        <Route path="/profile-setting/:id" element={<ProfilePage />} />
        <Route path="/approval" element={<Approval />} />
      </Routes>
    </>
  );
}

export default App;
