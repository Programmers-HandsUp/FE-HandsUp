"use client";

import Icon from "@/app/_component/common/Icon";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-[358px] w-[92%] mt-4 mx-auto shrink-0 rounded-lg bg-gray-500 opacity-80 flex flex-col justify-center items-center">
      <Icon
        id="close-ring"
        stroke="red"
      />
      <span>에러가 발생했습니다.</span>
      <button
        className="bg-gray-500 p-2 mt-12 text-xl rounded-lg text-green-200"
        onClick={() => reset()}>
        다시 시도하기
      </button>
    </div>
  );
}
