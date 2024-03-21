import { DotLottiePlayer } from "@dotlottie/react-player";

const NotSearchResult = () => {
  return (
    <div className="mx-auto my-auto w-fit h-fit text-center">
      <DotLottiePlayer
        className="mt-[4rem]"
        src={"/assets/animations/NoSearch.lottie"}
        autoplay
        loop
        style={{ width: "100%", height: "70%" }}
      />
      <h1 className="text-xl mt-[2rem]">검색된 결과물이 없습니다.</h1>
    </div>
  );
};

export default NotSearchResult;
