"use client";

import Icon from "@/app/_component/common/Icon";
import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const { show } = Toast();
  const [searchKeyword, setSearchKeyword] = useState("");

  const onKeyDownSearchButton = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (searchKeyword.length < 2) {
        show("키워드를 2글자 이상 입력해주세요.", "info-solid", 3000);
      }
      router.push(`/search/${searchKeyword}`);
    }
  };

  const onClickClearButton = () => {
    setSearchKeyword("");
  };

  return (
    <div className="flex gap-2 my-4">
      <button onClick={() => router.push("/")}>
        <Icon
          size={16}
          id="arrow-back"
        />
      </button>
      <Input>
        <Input.InputInnerBox className="py-[0.1rem] gap-2">
          <Input.InputForm
            value={searchKeyword}
            onKeyDown={onKeyDownSearchButton}
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
