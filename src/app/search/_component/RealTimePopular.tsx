import Link from "next/link";
import { Suspense } from "react";

import { PopularKeyword } from "@/utils/types/search/popularKeyword";

import useGetPopularKeywordQuery from "../_hooks/queries/useGetPopularKeyword";
import setSearchRecordInLocalStorage from "../_utils/setSearchRecordInLocalStorage";

const RealTimePopular = () => {
  const { data: { keywords: popularKeywords } = {} } =
    useGetPopularKeywordQuery();

  return (
    <Suspense
      fallback={
        <div className="w-[85%] h-[15%] mx-auto animate-pulse my-1 shrink-0 rounded-full bg-gray-500" />
      }>
      {popularKeywords?.length ? (
        <>
          <h1 className="text-xl">실시간 인기</h1>
          <div className="grid grid-rows-5 grid-flow-col my-1">
            {popularKeywords?.map(
              ({ keyword }: PopularKeyword, index: number) => (
                <Link
                  onClick={() => setSearchRecordInLocalStorage(keyword)}
                  href={`/search/${keyword}`}
                  className="flex gap-3"
                  key={index}>
                  <p className="text-red-500 text-[0.8rem] py-[0.2rem]">{`${index + 1} `}</p>
                  <p className="text-[0.9rem] w-[8.5rem] mr-4 overflow-hidden text-ellipsis">
                    {keyword}
                  </p>
                </Link>
              )
            )}
          </div>
        </>
      ) : (
        <>
          <p>실시간 인기 검색어 데이터가 부족합니다.</p>
        </>
      )}
    </Suspense>
  );
};

export default RealTimePopular;
