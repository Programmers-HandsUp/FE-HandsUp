"use client";

import Icon from "@/app/_component/common/Icon";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SearchRecordItemProps {
  itemText: string;
  onClickRemoveButton: () => void;
}
const TEMPLIST = ["갤럭시노트", "아이폰", "갤럭시노트"];

const RecentSearch = () => {
  const [recentSearchList, setRecentSearchList] = useState<string[]>();
  const searchResults = useCallback((newList: string[]) => {
    setRecentSearchList(newList);
  }, []);

  useEffect(() => {
    const searchRecord = localStorage.getItem("searchKeyword");
    if (searchRecord) {
      setRecentSearchList(JSON.parse(searchRecord));
    } else {
      setRecentSearchList(TEMPLIST);
    }
  }, [searchResults]);

  const onClickClearButton = () => {
    setRecentSearchList([]);
    localStorage.setItem("searchKeyword", JSON.stringify([]));
  };

  const onClickDeleteButton = (index: number) => {
    if (recentSearchList) {
      const tempSearchList = recentSearchList.filter((_, i) => i !== index);
      setRecentSearchList(tempSearchList);
      localStorage.setItem("searchKeyword", JSON.stringify(tempSearchList));
    }
  };

  const SearchRecordItem = ({
    itemText,
    onClickRemoveButton
  }: SearchRecordItemProps) => {
    return (
      <div className="flex justify-between my-4">
        <div className="flex gap-6">
          <Icon id="clock" />
          <Link href={`/search/${itemText}`}>{itemText}</Link>
        </div>
        <button
          onClick={onClickRemoveButton}
          className="pr-2">
          X
        </button>
      </div>
    );
  };

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h1 className="text-xl">최근 검색</h1>
        <button
          className="text-sm"
          onClick={onClickClearButton}>
          전체 삭제
        </button>
      </div>
      {recentSearchList && recentSearchList.length ? (
        recentSearchList.map((item, index) => (
          <SearchRecordItem
            onClickRemoveButton={() => onClickDeleteButton(index)}
            key={index}
            itemText={item}
          />
        ))
      ) : (
        <p className="h-fit w-fit my-[8rem] mx-auto text-md">
          최근 검색 기록이 없습니다.
        </p>
      )}
    </div>
  );
};

export default RecentSearch;
