"use client";

import html2canvas from "html2canvas";
import saveAs from "file-saver";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import Icon from "@/app/_component/common/Icon";

function ReviewComplete() {
  const reviewRef = useRef<HTMLDivElement>(null);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  const tradeMethod = "직거래";

  const handleDownload = async () => {
    if (!reviewRef.current) return;

    try {
      const div = reviewRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.jpeg");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <main className="h-dvh flex flex-col items-center">
      <div className="w-80 h-7 bg-[#96E4FF] border rounded-xl flex justify-center z-10 "></div>

      <div className="animate-slideDown">
        <div
          ref={reviewRef}
          className="flex flex-col w-72 h-[500px] bg-gray-100 drop-shadow-xl rounded-b-md dark:text-black">
          <div className="flex justify-center mb-7">
            <Image
              src="/assets/logo.webp"
              width={100}
              height={100}
              alt="app logo"
            />
          </div>
          <p className="text-sm mb-1 px-2">{formattedDate}</p>
          <div className="flex justify-between items-center border-dashed border-y border-gray-800 px-2 pt-4 pb-3 mb-3">
            <p className="">경매 No.</p>
            <p className="text-xl">H-001</p>
          </div>

          <div className="grid grid-cols-2 px-2 text-sm mb-4">
            <div className="grid grid-rows-4 gap-1">
              <p>판매 물품</p>
              <p>입찰 가격</p>
              <p>낙찰 가격</p>
              <p>거래 방식</p>
            </div>
            <div className="grid grid-rows-4 gap-1 text-right">
              <p>에어팟 새상품</p>
              <p>100,000원</p>
              <p>120,000원</p>
              <div className="flex flex-row justify-end gap-1">
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={tradeMethod === "직거래"}
                    disabled
                  />
                  직거래
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={tradeMethod !== "직거래"}
                    disabled
                  />
                  택배
                </label>
              </div>
              {tradeMethod === "직거래" && <p>한남동</p>}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-auto mb-3 pt-2 border-t-2 text-sm">
            <p>HandsUp에서 좋은 거래하세요 :)</p>
            <Image
              src="/assets/barcode.webp"
              width={130}
              height={18}
              alt="barcode image"
            />
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-10 gap-11">
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

export default ReviewComplete;
