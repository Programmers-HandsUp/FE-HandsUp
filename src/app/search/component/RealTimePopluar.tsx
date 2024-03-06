import Link from "next/link";

import useGetPopluarKeywrodrQuery from "@/app/hooks/queries/useGetPopluarKeyword";

/* @TODO : 
    로딩텍스트 스켈레톤으로 대체 예정
  */

const RealTimePopluar = () => {
  const { data: popularKeywords } = useGetPopluarKeywrodrQuery();

  return (
    <div>
      <h1 className="text-xl">실시간 인기</h1>
      <div className="grid grid-rows-5 grid-flow-col my-1">
        {popularKeywords ? (
          popularKeywords.map((item, index) => (
            <Link
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

export default RealTimePopluar;
