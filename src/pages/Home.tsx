import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import TopSelling from "@/components/topSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <TopSelling></TopSelling>
    </div>
  );
};

export default Home;
