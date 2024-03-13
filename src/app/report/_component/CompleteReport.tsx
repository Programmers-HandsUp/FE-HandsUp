"use client";
import { useRouter } from "next/navigation";

const CompleteReport = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-xl mx-auto my-auto">신고 접수가 완료 되었습니다.</h1>
      <button onClick={() => router.back()}>돌아가기</button>
    </div>
  );
};
