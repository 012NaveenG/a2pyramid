import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getSession, clearSession } from "./api/users";
import SidebarMenu from "./components/SidebarMenu";




export default function App() {
  const isLoggedIn = !!getSession();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/*"
          element={isLoggedIn ? <SidebarMenu /> : <Navigate to="/" />}
        />
        
      </Routes>
    </Router>
  );
}
