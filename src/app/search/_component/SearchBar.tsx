"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

import Icon from "@/app/_component/common/Icon";
import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";

import setSearchRecordInLocalStorage from "../_utils/setSearchRecordInLocalStorage";

const SearchBar = () => {
  const router = useRouter();
  const { show } = Toast();

  const onKeyDownSearchButton = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const searchKeyword = event.currentTarget.value;

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

  return (
    <div className="flex gap-2 my-4">
      <button onClick={() => router.back()}>
        <Icon
          size={16}
          id="arrow-back"
        />
      </button>
      <Input className="py-[0.1rem] gap-2">
        <Input.InputForm
          onKeyDown={onKeyDownSearchButton}
          className="w-[16rem]"
        />
        <Input.ClearButton />
      </Input>
    </div>
  );
};
export default SearchBar;
