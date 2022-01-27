import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import BaseLayout from "views/Layout/BaseLayout";
import Login from "views/Auth/Login";
import Register from "views/Auth/Register";
import Nav1 from "views/User/Nav1";
import Nav2 from "views/User/Nav-2/Nav2";
import Nav3 from "views/User/Nav3";
import Create from "views/User/Nav-2/Create";

// const Nav1 = lazy(() => import("../views/User/Nav1"));
// const Nav2 = lazy(() => import("../views/User/Nav2"));
// const Nav3 = lazy(() => import("../views/User/Nav3"));

const router = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <BaseLayout /> : <Navigate to="/login" replace />,
    children: [
      {
        path: "",
        element: <Navigate to="/nav-2" replace />
      },
      {
        path: "nav-1",
        element: <Nav1 />
      },
      {
        path: "nav-2/create",
        element: <Create />
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