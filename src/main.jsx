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
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import PrivateRoute from "./Component/AuthProvider/PrivateRoute/PrivateRoute";
import BrandDetails from "./Pages/BrandDetails/BrandDetails";
import Error from "./Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/cars/:brand",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.brand}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
