const RealTimePopluar = () => {
  const popularList = [
    "아이폰 15",
    "프로그래머스",
    "Nextjs13",
    "React-query",
    "모던 딥 자바스크립트",
    "모던 딥 리엑트",
    "아이스크림",
    "BBQ 치킨",
    "스타벅스",
    "아파트"
  ];
  return (
    <div>
      <h1 className="text-xl">실시간 인기</h1>
      <div className="grid grid-rows-5 grid-flow-col my-1">
        {popularList.map((item, index) => (
          <button
            onClick={() => console.log(item)}
            className="flex gap-3"
            key={index}>
            <p className="text-red-500 text-[0.8rem] py-[0.2rem]">{`${index + 1} `}</p>
            <p className="text-[0.9rem] overflow-hidden text-ellipsis">
              {item}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RealTimePopluar;
