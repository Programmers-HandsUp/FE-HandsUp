"use client";

import { useEffect } from "react";

import Icon from "@/app/_component/common/Icon";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <div className="h-[22px] w-full shrink-0 rounded-full opacity-80  bg-gray-500" />
        <div className="h-[358px] w-full shrink-0 rounded-lg bg-gray-500 opacity-80 flex flex-col justify-center items-center">
          <Icon
            id="close-ring"
            stroke="red"
          />
          <span>에러 발생</span>
        </div>
        <button
          className="bg-gray-500 p-2 rounded-lg"
          onClick={() => reset()}>
          다시 시도하기
        </button>
      </div>
    </div>
  );
}
