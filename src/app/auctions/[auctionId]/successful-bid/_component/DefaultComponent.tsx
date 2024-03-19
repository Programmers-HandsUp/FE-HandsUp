"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";

interface DefaultComponentProps {
  sellerNickName: string;
  buyerNickName: string;
  biddingCount: number;
  bookmarkCount: number;
  initialBiddingPrice: number;
  currentBiddingPrice: number | undefined;
  imgUrl: string;
}

const DefaultComponent = ({
  sellerNickName,
  buyerNickName,
  biddingCount,
  bookmarkCount,
  initialBiddingPrice,
  currentBiddingPrice,
  imgUrl
}: DefaultComponentProps) => {
  return (
    <div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center gap-[100px]">
          <div>
            <h1 className="text-3xl">축하드립니다!</h1>
          </div>
          <div className="relative w-[240px] h-[240px]">
            <div className="absolute top-0 w-[240px] h-[240px] rounded-xl overflow-hidden">
              <Image
                src={imgUrl}
                alt="상품 이미지"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-lg">
              <p>
                <span className="text-[#969dff]">{buyerNickName}</span>님이
                참여한 <span className="text-[#96fff6]">{sellerNickName}</span>
                님의 경매 상품이 낙찰되었습니다!
              </p>
            </div>
            <div>
              <hr />
              <h1 className="text-xl">🔥치열했던 경매 요약</h1>
              <div className="flex flex-col py-5">
                <span>
                  🙋‍♂️경매에 참여한 사람 :{" "}
                  <strong className="text-[#969dff]">{biddingCount}</strong>명
                </span>
                <span>
                  👀경매에 관심있었던 사람 :{" "}
                  <strong className="text-[#969dff]">{bookmarkCount}</strong>명
                </span>
              </div>

              <div>
                경매 시작 가격 :{" "}
                <strong className="text-[#969dff]">
                  {initialBiddingPrice}
                </strong>
                원
              </div>
              <div className="text-2xl">
                💰최종 낙찰 가격 :{" "}
                <strong className="text-[#969dff]">
                  {currentBiddingPrice}
                </strong>
                원
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="absolute top-0">
          <DotLottiePlayer
            src="/assets/animations/Party.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "70%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default DefaultComponent;
