import { Routes, BrowserRouter, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { LoginPage } from "../pages/Login";

export function RoutesApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
