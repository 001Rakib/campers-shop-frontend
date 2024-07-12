import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import TopSelling from "@/components/topSelling/TopSelling";
import VideoBlogs from "@/components/videoBlogs/VideoBlogs";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <TopSelling></TopSelling>
      <Category></Category>
      <VideoBlogs></VideoBlogs>
    </div>
  );
};

export default Home;
