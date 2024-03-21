"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <DotLottiePlayer
        src="/assets/animations/404-NotFound.lottie"
        autoplay
        loop
        style={{ width: "320px" }}
      />
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xl text-[#96E4FF]">
          원하시는 페이지를 찾을 수 없습니다.
        </p>
        <p>
          찾으려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br />
          입력하신 페이지의 주소가 정확한지 <br />
          다시 한번 확인해 주세요.
        </p>
      </div>
      <Link
        href="/home"
        className="text-[#96E4FF] underline underline-offset-2">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
