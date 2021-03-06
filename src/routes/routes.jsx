import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { LoginPage } from "../pages/Login";
import { RegisterUser } from "../pages/RegisterUser";

export function RoutesApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}
