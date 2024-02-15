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
        productName="가나다라마바사아자차카타하기니디"
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
        tradeState="거래중"
        className="border-[0.1rem] border-black px-1 py-1 mx-auto"
      />
      <ProductCard
        titleImage={tempImage}
        productName="가나다라마바사아자차카ㅏ하기니디"
        price={30000}
        createDate={date}
        tradeState="입찰실패"
        className="w-[360px] px-1 py-1 mx-auto"
      />
      <ProductCard
        titleImage={tempImage}
        productName="가나다라마바사아자차카ㅏ하기니디"
        price={30000}
        createDate={date}
        isShowStateTag={false}
        tradeState="거래완료"
        className="w-[360px] border-[0.1rem] border-black px-1 py-1 mx-auto"
      />
      <ProductCard
        titleImage={tempImage}
        productName="가나다라마바사아자차카ㅏ하기니디"
        price={30000}
        createDate={date}
        className="px-1 py-1 mx-auto"
      />
    </main>
  );
}
