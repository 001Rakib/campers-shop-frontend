import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { cartProducts } = useAppSelector((state) => state.cart);

  //for giving page refresh warning
  useEffect(() => {
    if (!cartProducts.length) return;

    const handlePageReload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      return e.returnValue("");
    };

    window.addEventListener("beforeunload", handlePageReload, {
      capture: true,
    });
    return () => {
      window.removeEventListener("beforeunload", handlePageReload, {
        capture: true,
      });
    };
  }, [cartProducts.length]);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
