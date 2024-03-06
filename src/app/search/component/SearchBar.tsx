"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

import Icon from "@/app/_component/common/Icon";
import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";

const SearchBar = () => {
  const router = useRouter();
  const { show } = Toast();
  const [searchKeyword, setSearchKeyword] = useState("");

  const setRecentSearchRecord = (keyword: string) => {
    console.log("*");
    const record = localStorage.getItem("searchKeyword");
    if (record) {
      const recordList = [...JSON.parse(record)];
      if (recordList.length >= 5) {
        recordList.pop();
      }
      recordList.unshift(keyword);
      localStorage.setItem("searchKeyword", JSON.stringify(recordList));
    } else {
      localStorage.setItem("searchKeyword", JSON.stringify([keyword]));
    }
  };

  const onKeyDownSearchButton = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();

    if (event.key === "Enter") {
      event.preventDefault();
      if (searchKeyword.length < 2) {
        show("키워드를 2글자 이상 입력해주세요.", "info-solid", 3000);
      }
      setRecentSearchRecord(searchKeyword);
      router.push(`/search/${searchKeyword}`);
    }
  };

  const onClickClearButton = () => {
    setSearchKeyword("");
  };

  return (
    <div className="flex gap-2 my-4">
      <button onClick={() => router.back()}>
        <Icon
          size={16}
          id="arrow-back"
        />
      </button>
      <Input>
        <Input.InputInnerBox className="py-[0.1rem] gap-2">
          <Input.InputForm
            value={searchKeyword}
            onKeyPress={onKeyDownSearchButton}
            className="w-[16rem]"
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <button
            onClick={onClickClearButton}
            className="bg-gray-300 rounded-full w-fit h-fit px-1 mx-1 text-sm text-center my-auto">
            X
          </button>
        </Input.InputInnerBox>
      </Input>
    </div>
  );
};
export default SearchBar;
