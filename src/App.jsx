import React from "react";
import Header from "./components/Header";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import GalleryPage from "./pages/GalleryPage";
import CheckoutPage from "./pages/CheckoutPage";
import InfoLayout from "./Layouts/InfoLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path : "checkout",
        element : <CheckoutPage/>
      },
      {
        path : "information",
        element : <InfoLayout/>
      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
