"use client";

import Icon from "@/app/_component/common/Icon";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <div className="h-[208px] w-[92%] mt-4 mx-auto shrink-0 rounded-lg bg-gray-500 opacity-80 flex flex-col justify-center items-center">
        <Icon
          id="close-ring"
          stroke="red"
        />
        <span>에러가 발생했습니다.</span>
      </div>
      <div className="h-[208px] w-[92%] mt-4 mx-auto shrink-0 rounded-lg bg-gray-500 opacity-80 flex flex-col justify-center items-center">
        <Icon
          id="close-ring"
          stroke="red"
        />
        <span>에러가 발생했습니다.</span>
      </div>
    </div>
  );
}
