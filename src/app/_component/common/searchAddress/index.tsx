import { useForm } from "react-hook-form";
import useSearchAddrQuery from "@/app/hooks/queries/useSearchAddrQuery";
import EmptyResults from "./_component/EmptyResults";
import Icon from "../Icon";
import AddrList from "./_component/AddrList";

interface Address {
  address: string;
}

interface SearchAddressProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  setAddress: (address: string) => void;
}

function SearchAddress({ modal, setModal, setAddress }: SearchAddressProps) {
  const { register, watch, setValue } = useForm<Address>();

  const { data } = useSearchAddrQuery(watch("address"));

  const handleClickAddr = (address: string) => {
    setAddress(address);
    setModal(!modal);
    setValue("address", "");
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <label className="flex items-center border h-9 rounded-md px-1 w-72">
          <Icon id="search" fill="none" stroke="gray" />
          <input
            {...register("address", { required: true })}
            placeholder="지역(읍, 면, 동)을 검색해 주세요."
            className="w-full px-4"
          />
        </label>
        <button type="button" onClick={() => setModal(!modal)}>
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

export default SearchAddress;
