"use client";

import Lottie from "react-lottie-player";
import party from "/public/assets/LottieFiles/party.json";
import Image from "next/image";
import Button from "../Button";
import Header from "../Header";
import ArrowBackButton from "../ArrowBackButton";

interface SuccessfulBidProps {
  sellerNickName: string;
  buyerNickName: string;
  biddingCount: number;
  bookmarkCount: number;
  initialBiddingPrice: number;
  currentBiddingPrice: number;
}

const SuccessfulBid = ({
  sellerNickName,
  buyerNickName,
  biddingCount,
  bookmarkCount,
  initialBiddingPrice,
  currentBiddingPrice
}: SuccessfulBidProps) => {
  return (
    <div>
      <Header left={<ArrowBackButton />} />
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1>축하드립니다!</h1>
        </div>
        <div className="absolute w-[240px] h-[240px] rounded-xl overflow-hidden">
          <Image
            src="data:image/jpeg;base64,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"
            alt="상품 이미지"
            fill
            className="object-cover"
          />
        </div>
        <Lottie
          loop
          animationData={party}
          play
          style={{ width: 360, height: 400 }}
        />
      </div>
      <div>
        <p>
          <span>{buyerNickName}</span>님이 참여한 <span>{sellerNickName}</span>
          님의 경매 상품이 낙찰되었습니다!
        </p>
      </div>
      <hr />
      <div>🔥치열했던 경매 요약</div>
      <div>
        <span>경매에 참여한 사람 : {biddingCount}명</span>
        <span>경매에 관심있었던 사람 : {bookmarkCount}명</span>
      </div>

      <div>경매 시작 가격 : {initialBiddingPrice}원</div>
      <div>최종 낙찰 가격 : {currentBiddingPrice}원</div>
      <hr />
      <Button color="primary">입찰자 목록 페이지로 가기</Button>
    </div>
  );
};
export default SuccessfulBid;
