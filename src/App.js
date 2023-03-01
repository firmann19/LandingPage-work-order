import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompleteOrder from './pages/CompleteOrder';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
       <Routes>
         <Route path="/login-page" element={<LoginPage />} />
         <Route path="/register-page" element={<RegisterPage />} />
         <Route path="/complete-order" element={<CompleteOrder />} />
       </Routes>
    </>
  );
}

export default App;
