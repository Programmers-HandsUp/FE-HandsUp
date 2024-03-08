"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

import setSearchRecordInLocalStorage from "../utils/setSearchRecordInLocalStorage";
import Icon from "@/app/_component/common/Icon";
import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";

const SearchBar = () => {
  const router = useRouter();
  const { show } = Toast();
  const [searchKeyword, setSearchKeyword] = useState("");

  const onKeyDownSearchButton = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();

    if (event.key === "Enter") {
      event.preventDefault();
      if (searchKeyword.length < 2) {
        show("2글자 이상 입력해주세요.", "info-solid", 3000);
        return;
      }
      setSearchRecordInLocalStorage(searchKeyword);
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
