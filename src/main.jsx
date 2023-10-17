import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import Home from "./Pages/Home/Home";
import MyCart from "./Pages/MyCart/MyCart";
import { SignIn } from "./Pages/Signin/Signin";
import { SignUp } from "./Pages/Signup/Signup";
import { AddProduct } from "./Pages/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </React.StrictMode>
);
