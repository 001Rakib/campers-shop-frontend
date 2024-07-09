import App from "@/App";
import Home from "@/pages/Home";
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
        path: "all-products",
        element: <Products></Products>,
      },
    ],
  },
]);
export default router;
