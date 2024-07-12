import Category from "@/components/category/Category";
import FaQ from "@/components/faq/FaQ";
import Hero from "@/components/hero/Hero";
import TopSelling from "@/components/topSelling/TopSelling";
import VideoBlogs from "@/components/videoBlogs/VideoBlogs";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <TopSelling></TopSelling>
      <Category></Category>
      <FaQ></FaQ>
      <VideoBlogs></VideoBlogs>
    </div>
  );
};

export default Home;
