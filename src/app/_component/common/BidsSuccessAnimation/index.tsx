import { DotLottiePlayer } from "@dotlottie/react-player";

const BidsSuccessAnimation = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] dark:bg-gray-100/50 bg-black/50 transition-opacity duration-700">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <DotLottiePlayer
            src="/assets/animations/Bids.lottie"
            autoplay
            loop
            style={{ width: "320px" }}
          />
          <div className="text-center">
            <span className="text-white">입찰 중입니다..</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BidsSuccessAnimation;
