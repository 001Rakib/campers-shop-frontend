import SectionHeader from "../sectionHeader/SectionHeader";

const VideoBlogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-inter mt-24">
      <SectionHeader header1="Blogs" header2="Section"></SectionHeader>
      <div className="flex flex-wrap lg:flex-nowrap justify-center mb-12 gap-5 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6 md:p-0">
          <h2 className="text-3xl text-blue-600 mb-4 font-semibold">
            Video Blogs
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to Camp Venture Stories, our video blog series where we take
            you on exciting adventures through the wild. Join our team and guest
            explorers as we share tips, tricks, and personal stories from our
            camping trips.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Whether you’re a seasoned camper or just starting out, you’ll find
            inspiration and valuable insights to make your outdoor experiences
            unforgettable. Sit back, relax, and let’s explore the great outdoors
            together!
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-0">
          <div>
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/J0pBd4_g-ws"
              title="10 Camping Tips in 10 Minutes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBlogs;
