import { useForm } from "react-hook-form";
import useSearchAddrQuery from "@/app/hooks/queries/useSearchAddrQuery";
import Icon from "../Icon";
import { EmptyResults } from "./EmptyResults";
import AddrList from "./AddrList";

interface SearchAddressProps {
  close: () => void;
  onChange: (address: string) => void;
}

export function SearchAddress({ close, onChange }: SearchAddressProps) {
  const { register, watch } = useForm<{ search: string }>();

  const { data } = useSearchAddrQuery(watch("search"));

  const handleClickAddr = (address: string) => {
    close();
    onChange(address);
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <label className="flex items-center border h-9 rounded-md px-1 w-72">
          <Icon
            id="search"
            fill="none"
            stroke="gray"
          />
          <input
            {...register("search", { required: true })}
            placeholder="지역(읍, 면, 동)을 검색해 주세요."
            className="w-full px-4"
          />
        </label>
        <button
          type="button"
          className="ml-4"
          onClick={close}>
          취소
        </button>
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
