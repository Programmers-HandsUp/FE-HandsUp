import Icon from "@/app/_component/common/Icon";

interface SearchRecordItemProps {
  itemText: string;
}

const RecentSearch = () => {
  const recentSearchList = ["갤럭시노트", "아이폰", "갤럭시노트"];

  const SearchRecordItem = ({ itemText }: SearchRecordItemProps) => {
    return (
      <div className="flex justify-between my-4">
        <div className="flex gap-6">
          <Icon id="clock" />
          <p>{itemText}</p>
        </div>
        <button className="pr-2">X</button>
      </div>
    );
  };

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h1 className="text-xl">최근 검색</h1>
        <button className="text-sm">전체 삭제</button>
      </div>
      {recentSearchList.length ? (
        recentSearchList.map((item, index) => (
          <SearchRecordItem
            key={index}
            itemText={item}
          />
        ))
      ) : (
        <p>최근 검색기록이 없습니다.</p>
      )}
    </div>
  );
};

export default RecentSearch;
