"use client";
import saveAs from "file-saver";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { ReviewComplete } from "@/utils/types/auction/auctionReivewEnroll";
import Icon from "@/app/_component/common/Icon";
import dateFormat from "./_utils/formatDate";

function ReviewReceipt({ review }: { review: ReviewComplete }) {
  const reviewRef = useRef<HTMLDivElement>(null);
  const isDirect = review && review.tradeMethod === "DIRECT";

  const handleDownload = async () => {
    if (!reviewRef.current) return;

    try {
      const div = reviewRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `${review.writerNickname}거래 영수증`);
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  useEffect(() => {
    const originalLineHeight = document.body.style.lineHeight;
    document.body.style.lineHeight = "0";

    return () => {
      document.body.style.lineHeight = originalLineHeight;
    };
  }, []);

  return (
    <main className="h-dvh flex flex-col items-center">
      <div className="w-80 h-7 bg-[#96E4FF] border rounded-xl flex justify-center z-10 "></div>

      <div className="animate-slideDown">
        <div
          ref={reviewRef}
          className="flex flex-col w-72 h-[500px] bg-gray-100 drop-shadow-xl rounded-b-md dark:text-black">
          <div className="flex justify-center py-11">
            <Image
              src="/assets/images/textLogo.webp"
              width={100}
              height={100}
              alt="app logo"
            />
          </div>
          <p className="text-sm mb-1 px-2">
            {dateFormat(review.tradingCreatedAt)}
          </p>
          <div className="flex justify-between items-center border-dashed border-y border-gray-800 px-2 pt-4 pb-3 mb-3">
            <p className="">경매 No.</p>
            <p className="text-xl">H-{review.auctionId}</p>
          </div>

          <div className="grid grid-cols-2 px-2 text-sm mb-4">
            <div className="grid grid-rows-4 gap-1">
              <p>구매자</p>
              <p>판매 물품</p>
              <p>낙찰 가격</p>
              <p>거래 방식</p>
            </div>
            <div className="grid grid-rows-4 gap-1 text-right">
              <p>{review.writerNickname}</p>
              <p>{review.auctionTitle}</p>
              <p>{review.winningPrice}</p>
              <div className="flex flex-row justify-end gap-1">
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={isDirect}
                    disabled
                  />
                  직거래
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={!isDirect}
                    disabled
                  />
                  택배
                </label>
              </div>
              {isDirect && <p>{review.tradingLocation.dong}</p>}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-auto mb-3 pt-2 border-t-2 text-sm">
            <p>HandsUp에서 좋은 거래하세요 :)</p>
            <Link
              href={`/auctions/${review.auctionId}`}
              className="underline">
              상품 다시 보러가기
            </Link>
            <Image
              src="/assets/images/barcode.webp"
              width={130}
              height={18}
              alt="barcode image"
            />
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-10 gap-11 bg:text-white">
        <Link
          href="/"
          className="flex flex-col items-center gap-3">
          <Icon
            id="home"
            size={30}
          />
          <p>HOME</p>
        </Link>
        <button
          onClick={handleDownload}
          className="flex flex-col items-center gap-3">
          <Icon
            id="download"
            size={30}
          />
          <p>SAVE</p>
        </button>
      </div>
    </main>
  );
}

export default ReviewReceipt;
