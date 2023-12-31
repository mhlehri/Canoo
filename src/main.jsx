import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import Home from "./Pages/Home/Home";
import MyCart from "./Pages/MyCart/MyCart";
import SignUpPage from "./Pages/Signup/Signup";
import { AddProduct } from "./Pages/AddProduct/AddProduct";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import PrivateRoute from "./Component/AuthProvider/PrivateRoute/PrivateRoute";
import BrandDetails from "./Pages/BrandDetails/BrandDetails";
import Error from "./Pages/Error/Error";
import CarsInfo from "./Pages/CarsInfo/CarsInfo";
import { EditCar } from "./Pages/EditPage/EditCar";
import { ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./Pages/Signin/Signin.jsx";

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
        loader: () =>
          fetch("https://automotive-server-indol.vercel.app/cars-info"),
      },
      {
        path: "/login",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/cars/:brand",
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "/cars-info/:carName",
        element: (
          <PrivateRoute>
            <CarsInfo></CarsInfo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-indol.vercel.app/cars-info/${params.carName}`
          ),
      },
      {
        path: "/cars-edit/:carName",
        element: (
          <PrivateRoute>
            <EditCar></EditCar>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-indol.vercel.app/cars-edit/${params.carName}`
          ),
      },
    ],
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  // console.log("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ClerkProvider>
  </React.StrictMode>
);
