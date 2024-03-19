export default function AuctionDetailLoading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse mt-5">
      <div className="flex flex-col gap-6">
        <div className="h-[32px] w-full shrink-0 rounded-md bg-gray-500" />
        <div className="h-[63px] w-full shrink-0 rounded-sm bg-gray-500" />
        <div className="h-[300px] w-full shrink-0 rounded-lg bg-gray-500" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="h-[48px] w-[48px] shrink-0 rounded-full bg-gray-500" />
          <div className="flex flex-col gap-3">
            <div className="h-[12px] w-[102px] shrink-0 rounded-full bg-gray-500" />
            <div className="h-[12px] w-[62px] shrink-0 rounded-full bg-gray-500" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between mx-3">
            <div className="h-[20px] w-[20px] shrink-0 rounded-full bg-gray-500" />
            <div className="h-[20px] w-[20px] shrink-0 rounded-full bg-gray-500" />
          </div>
          <div className="h-[19px] w-full rounded-full bg-gray-500" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[35px] w-[220px] shrink-0 rounded-full bg-gray-500" />
        <div className="h-[18px] w-[70px] shrink-0 rounded-full bg-gray-500" />
      </div>
      <div className="flex gap-2">
        <div className="h-[21px] w-[60px] shrink-0 rounded-full bg-gray-500" />
        <div className="h-[21px] w-[60px] shrink-0 rounded-full bg-gray-500" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[18px] w-full shrink-0 rounded-full bg-gray-500" />
        <div className="h-[18px] w-full shrink-0 rounded-full bg-gray-500" />
        <div className="h-[18px] w-full shrink-0 rounded-full bg-gray-500" />
        <div className="h-[18px] w-[60%] shrink-0 rounded-full bg-gray-500" />
      </div>
    </div>
  );
}
