export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <div className="animate-pulse flex flex-col">
        <div className="flex gap-3">
          <div className="h-[32px] ml-2 mb-2 mt-4 w-[8%] shrink-0 rounded-full bg-gray-500" />
          <div className="h-[32px] mb-2 mt-4 w-[80%] shrink-0 rounded-full bg-gray-500" />
        </div>
        <div className="h-[20px] ml-2 my-2 w-[120px] shrink-0 rounded-full bg-gray-500" />
        <div className="flex ml-2 justify-between">
          <div className="h-[26px] w-[70px] shrink-0 rounded-full bg-gray-500" />
          <div className="h-[26px] w-[95px] mr-4 shrink-0 rounded-full bg-gray-500" />
        </div>
        <div className="h-[600px] my-6 w-[91%] mx-auto shrink-0 rounded-lg bg-gray-500" />
      </div>
    </div>
  );
}
