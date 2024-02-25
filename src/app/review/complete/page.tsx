"use client";

import html2canvas from "html2canvas";
import saveAs from "file-saver";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Icon from "../../_component/common/Icon";

function ReviewComplete() {
  const divRef = useRef<HTMLDivElement>(null);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <main className="h-dvh flex flex-col items-center">
      <div className="w-80 h-7 bg-[#96E4FF] border rounded-xl z-10"></div>
      <div className="animate-slideDown">
        <div
          ref={divRef}
          className="py-3 px-2 border w-72 h-[500px] bg-gray-100 drop-shadow-xl rounded-b-md">
          <p className="py-2 text-center text-lg font-bold">RECEIPT</p>
          <p className="text-sm py-3">{formattedDate}</p>
          <div className="border-dashed border-y border-gray-800 py-2">
            <p className="text-xl">도리님과의 에어팟 거래 완료!</p>
            <p className="mt-9">💰 낙찰 가격 : 30000원</p>
            <p className="pb-3">👣 거래 방식: 직거래 - 한남동</p>
          </div>
          <div className="border-dashed border-b border-gray-800 text-center pt-6 pb-7">HandsUp에서 좋은 거래하세요 :)</div>
          <div className="flex flex-col items-center py-3 gap-5 bottom-0 left-0 right-0 absolute text-center">
            <Image
              src="/assets/barcode.png"
              width={130}
              height={18}
              alt="바코드"
            />
            <p>HandsUp</p>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-10 gap-11">
        <Link
          href="/"
          className="flex flex-col items-center">
          <Icon
            id="home"
            size={30}
          />
          <p>HOME</p>
        </Link>
        <button
          onClick={handleDownload}
          className="flex flex-col items-center">
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
