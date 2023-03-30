import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreateOrderPage from "./pages/CreateOrderPage";
import CompleteOrder from "./pages/CompleteOrder";
import LoginPage from "./pages/LoginPage";
import HistoryOrder from "./pages/HistoryOrder";
import HistoryOrderDetail from "./pages/HistoryOrderDetail";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";
import { listen } from "./redux/listener";



function App() {
  useEffect(() => {
    listen();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/history-order-page" element={<HistoryOrder />} />
        <Route path="/history-order-detail-page" element={<HistoryOrderDetail />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
