import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router}> </RouterProvider>

);
