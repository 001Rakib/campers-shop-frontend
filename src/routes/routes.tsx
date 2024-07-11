import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ProductManagement from "@/pages/ProductManagement";
import Products from "@/pages/Products";
import StripePayment from "@/pages/StripePayment";
import Success from "@/pages/Success";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "product-management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "success",
        element: <Success></Success>,
      },
      {
        path: "stripe",
        element: <StripePayment></StripePayment>,
      },
    ],
  },
]);
export default router;
