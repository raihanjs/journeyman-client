import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
