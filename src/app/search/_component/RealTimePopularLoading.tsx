import Skeleton from "@/app/_component/common/Skeleton";

const RealTimePopularLoading = () => {
  return (
    <div className="h-[12rem]">
      <h1 className="text-xl">실시간 인기</h1>
      <div className="flex ml-1 mt-2 gap-[2.1rem]">
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
      </div>
      <div className="flex ml-1 mt-2 gap-[2.1rem]">
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
      </div>
      <div className="flex ml-1 mt-2 gap-[2.1rem]">
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
      </div>
      <div className="flex ml-1 mt-2 gap-[2.1rem]">
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
      </div>
      <div className="flex ml-1 mt-2 gap-[2.1rem]">
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
        <Skeleton
          shape="square"
          className="w-[160px] h-[20px] bg-gray-400"
        />
      </div>
    </div>
  );
};

export default RealTimePopularLoading;
