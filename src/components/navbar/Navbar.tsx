import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-blue-500 py-4 text-white">
      <div className="flex justify-between max-w-screen-xl mx-auto items-center font-inter px-4">
        <NavLink to={"/"}>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-tent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
            </svg>
            <h1>Camp Venture</h1>
          </div>
        </NavLink>
        <div className="flex gap-4 font-inter">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/products"}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/product-management"}
          >
            Manage Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/about-us"}
          >
            About Us
          </NavLink>
        </div>
        <NavLink to={"/cart"}>
          <Button className="bg-blue-700">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <h1>Cart</h1>
            </div>
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
