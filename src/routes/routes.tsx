import App from "@/App";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
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
    ],
  },
]);
export default router;
