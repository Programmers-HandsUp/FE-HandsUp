import Link from "next/link";

import Icon from "@/app/_component/common/Icon";
import { PopularKeyword } from "@/utils/types/search/popularKeyword";

import useGetPopularKeywordQuery from "../_hooks/queries/useGetPopularKeyword";
import setSearchRecordInLocalStorage from "../_utils/setSearchRecordInLocalStorage";

const RealTimePopular = () => {
  const { data: { keywords: popularKeywords } = {}, isFetching } =
    useGetPopularKeywordQuery();

  if (isFetching) {
    return (
      <div className="h-[12rem]">
        <h1 className="text-xl">실시간 인기</h1>
        <div className="h-[7.5rem] w-[90%] ml-1 my-3 rounded-md animate-pulse bg-gray-500"></div>
      </div>
    );
  }
  return (
    <div className="h-[12rem]">
      <h1 className="text-xl">실시간 인기</h1>

      {popularKeywords?.length ? (
        <>
          <div className="grid grid-rows-5 grid-flow-col my-1">
            {popularKeywords
              .slice(0, 10)
              ?.map(({ keyword }: PopularKeyword, index: number) => (
                <Link
                  onClick={() => setSearchRecordInLocalStorage(keyword)}
                  href={`/search/${keyword}`}
                  className="flex gap-3 mt-[0.1rem]"
                  key={index}>
                  <p className="text-red-500 text-[0.8rem] py-[0.2rem]">{`${index + 1} `}</p>
                  <p className="text-[0.9rem] w-[8.5rem] mr-4 overflow-hidden text-ellipsis">
                    {keyword}
                  </p>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <div className="w-fit h-fit mx-auto mt-[5rem] flex gap-2">
          <Icon
            size={18}
            className="mt-[0.3rem]"
            id="close-square"
            stroke="red"
          />
          <span>실시간 인기 검색어 데이터가 부족합니다.</span>
        </div>
      )}
    </div>
  );
};

export default RealTimePopular;
