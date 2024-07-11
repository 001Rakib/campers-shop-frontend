import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Success = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-[80%] mx-auto">
        <DotLottieReact
          src="https://lottie.host/31d472ff-a68e-4d26-97c5-1255026e6031/Yak0rRlTRJ.lottie"
          loop
          autoplay
        />
      </div>
      <p className="text-center font-bold text-xl text-blue-600">
        Product Ordered Successfully
      </p>
    </div>
  );
};

export default Success;
