import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto font-inter h-[100vh] md:flex-row-reverse items-center justify-between overflow-auto">
      <div className="md:w-1/2">
        <img
          className="w-full md:h-[100vh]"
          src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="camping image"
        />
      </div>
      <div className="px-3">
        <h1 className="font-bold text-4xl mt-2 md:mt-0 md:text-6xl">
          <span className="text-blue-600">Camp Better</span> with <br /> Our Top
          Gear
        </h1>
        <p className="font-inter md:text-xl text-slate-400 mt-5">
          Find everything you need for a perfect camping experience.
          <br /> From tents and sleeping bags to cooking equipment and hiking
          gear, <br />
          our top-quality products ensure you camp better, every time.
        </p>
        <Link to={"/products"}>
          <Button className="mt-5 bg-blue-600">View All Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
