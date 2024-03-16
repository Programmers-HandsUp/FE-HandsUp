export default function Loading() {
  const createLoadingBlocks = () => {
    let blocks = [];
    for (let i = 0; i < 4; i++) {
      blocks.push(
        <div
          key={i}
          className="animate-pulse flex flex-col">
          <div className="h-[110px] my-2 w-[91%] mx-auto shrink-0 rounded-lg bg-gray-500 flex gap-[1rem]">
            <div className="w-[110px] h-[95px] shrink-0 rounded-lg bg-gray-700 my-auto mx-3" />
            <div>
              <div className="w-[100px] h-[24px] mt-3 bg-gray-600" />
              <div className="w-[60px] h-[20px] mt-3 bg-gray-600" />
              <div className="mt-3 flex gap-7">
                <div className="w-[80px] h-[20px] bg-gray-600" />
                <div className="w-[45px] h-[20px] bg-gray-600" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return blocks;
  };

  return <div className="flex flex-col gap-1">{createLoadingBlocks()}</div>;
}
