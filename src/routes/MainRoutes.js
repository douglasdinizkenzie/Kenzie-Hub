import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { TechContext, TechProvider } from "../contexts/TechContext";
import { Dashboard } from "../pages/DashBoard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
