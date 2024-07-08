const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-inter h-[100vh] flex items-center justify-between">
      <div className="px-3">
        <h1 className="font-bold text-6xl">
          <span className="text-blue-600">Camp Better</span> with <br /> Our Top
          Gear
        </h1>
        <p className="font-inter text-xl text-slate-400 mt-4">
          Find everything you need for a perfect camping experience.
          <br /> From tents and sleeping bags to cooking equipment and hiking
          gear, <br />
          our top-quality products ensure you camp better, every time.
        </p>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-[100vh]"
          src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="camping image"
        />
      </div>
    </div>
  );
};

export default Hero;
