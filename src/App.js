import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckOutPage from "./pages/CheckOutPage";
import CompleteOrder from "./pages/CompleteOrder";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HistoryOrder from "./pages/HistoryOrder";
import HistoryOrderDetail from "./pages/HistoryOrderDetail";
import ServiceList from "./pages/ServiceListPage";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/checkout-page" element={<CheckOutPage />} />
        <Route path="/history-order-page" element={<HistoryOrder />} />
        <Route path="/history-order-detail-page" element={<HistoryOrderDetail />} />
        <Route path="/service" element={<ServiceList />} />
      </Routes>
    </>
  );
}

export default App;
