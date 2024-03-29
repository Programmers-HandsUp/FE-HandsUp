import { useForm, useWatch } from "react-hook-form";

import useSearchAddrQuery from "@/app/_hooks/queries/useSearchAddrQuery";
import useDebounce from "@/app/_hooks/useDebounce";

import Icon from "../Icon";
import AddrList from "./AddrList";
import { EmptyResults } from "./EmptyResults";

interface SearchAddressProps {
  close?: () => void;
  onChange: (address: Address) => void;
}

interface Address {
  si: string;
  gu: string;
  dong: string;
}

export function SearchAddress({ close, onChange }: SearchAddressProps) {
  const { register, control } = useForm<{ search: string }>();
  const address = useDebounce(useWatch({ control, name: "search" }));
  const { data } = useSearchAddrQuery(address);

  const handleClickAddr = (address: string) => {
    close && close();
    const [si, gu, dong] = address.split(" ");
    onChange({ si, gu, dong });
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <label
          className={`flex items-center border h-9 rounded-md px-1 bg-white ${close ? "w-72" : "w-80"}`}>
          <Icon
            id="search"
            className="text-gray-600"
          />
          <input
            {...register("search", { required: true })}
            placeholder="지역(읍, 면, 동)을 검색해 주세요."
            autoComplete="off"
            className="w-full px-4 "
          />
        </label>
        {close && (
          <button
            type="button"
            className="ml-4"
            onClick={close}>
            취소
          </button>
        )}
      </div>

      {!data ? (
        <EmptyResults>검색어를 입력해주세요</EmptyResults>
      ) : data.length > 0 ? (
        data.map((addr, index) => (
          <AddrList
            key={index}
            handleClickAddr={handleClickAddr}
            address={addr.address}
          />
        ))
      ) : (
        <EmptyResults>검색결과가 없습니다.</EmptyResults>
      )}
    </div>
  );
}
