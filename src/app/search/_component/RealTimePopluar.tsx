import Link from "next/link";

import useGetPopularKeywordQuery from "../_hooks/queries/useGetPopularKeyword";
import setSearchRecordInLocalStorage from "../_utils/setSearchRecordInLocalStorage";
/* @TODO : 
    로딩텍스트 스켈레톤으로 대체 예정
  */

const RealTimePopular = () => {
  const { data: popularKeywords } = useGetPopularKeywordQuery();

  return (
    <div>
      <h1 className="text-xl">실시간 인기</h1>
      <div className="grid grid-rows-5 grid-flow-col my-1">
        {popularKeywords ? (
          popularKeywords.map((item: string, index: number) => (
            <Link
              onClick={() => setSearchRecordInLocalStorage(item)}
              href={`/search/${item}`}
              className="flex gap-3"
              key={index}>
              <p className="text-red-500 text-[0.8rem] py-[0.2rem]">{`${index + 1} `}</p>
              <p className="text-[0.9rem] overflow-hidden text-ellipsis">
                {item}
              </p>
            </Link>
          ))
        ) : (
          <p> 로딩중 ...</p>
        )}
      </div>
    </div>
  );
};

export default RealTimePopular;
