import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashBoard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function MainRoutes() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} setUser={user} />}
      />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
