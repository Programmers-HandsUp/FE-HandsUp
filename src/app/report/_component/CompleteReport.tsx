"use client";
import { useRouter } from "next/navigation";

const CompleteReport = () => {
  const router = useRouter();

  return (
    <div className="my-auto w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl w-fit">신고 접수가 완료 되었습니다.</h1>
      <button
        className="my-4 w-[4rem] text-center"
        onClick={() => router.back()}>
        {"돌아가기"}
      </button>
    </div>
  );
};

export default CompleteReport;
