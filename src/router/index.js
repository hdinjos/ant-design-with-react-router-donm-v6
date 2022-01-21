import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import BaseLayout from "../views/Layout/BaseLayout";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

const Nav1 = lazy(() => import("../views/User/Nav1"));
const Nav2 = lazy(() => import("../views/User/Nav2"));
const Nav3 = lazy(() => import("../views/User/Nav3"));

const router = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <BaseLayout /> : <Navigate to="/login" replace />,
    children: [
      {
        path: "nav-1",
        element: <Nav1 />
      },
      {
        path: "nav-2",
        element: <Nav2 />
      },
      {
        path: "nav-3",
        element: <Nav3 />
      }
    ]
  },
  {
    path: "login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/" replace />
  },
  {
    path: "register",
    element: <Register />
  }
]

export default router;