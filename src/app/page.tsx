"use client";

import tempImage from "../../public/assets/logoIcon.png";
import ProductCard from "./_component/common/ProductCard";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}

export default function Home() {
  const date = new Date();
  return (
    <main className="">
      <ProductCard
        titleImage={tempImage}
        productName="멋진 아이콘"
        price={30000}
        createDate={date}
        tradeState="취소됨"
        className="mx-auto my-4"
      />
      <ProductCard
        titleImage={tempImage}
        productName="가나다라마바사아자차캍파ㅏ하기니디"
        price={30000}
        createDate={date}
        tradeState="거래완료"
        className="mx-auto my-4"
      />
      <ProductCard
        titleImage={tempImage}
        productName="가나다라마바사아자차카ㅏ하기니디"
        price={30000}
        createDate={date}
        tradeState="거래완료"
        className="border-[0.1rem] border-black px-1 py-1 mx-auto"
      />
    </main>
  );
}
