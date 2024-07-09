import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import TopSelling from "@/components/topSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <TopSelling></TopSelling>
      <Category></Category>
    </div>
  );
};

export default Home;
