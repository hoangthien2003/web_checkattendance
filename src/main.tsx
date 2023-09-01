import React, { lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Link,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const Login = lazy(() => import("./pages/Login.tsx"));

const AuthRoute = () => {
  const token = localStorage.getItem("token");
  return token == null ? <Navigate to="/login" /> : <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AuthRoute />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
