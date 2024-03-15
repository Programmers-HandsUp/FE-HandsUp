import DropDown from "@/app/_component/common/DropDown";

import SearchBar from "../../_component/SearchBar";

interface SearchHeaderProps {
  filterModalOpen: () => void;
  alignOption: string;
  setAlignOption: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeader = ({
  alignOption,
  filterModalOpen,
  setAlignOption
}: SearchHeaderProps) => {
  return (
    <div className="w-fit mx-auto">
      <SearchBar />
      <h1 className="text-lg">진행중인 경매 상품</h1>
      <div className="flex justify-between my-1 mb-6">
        <button
          onClick={filterModalOpen}
          className="px-4 border-2 border-black text-black bg-white rounded-md">
          필터
        </button>
        <DropDown
          setSelectedOption={(selectedOption) => setAlignOption(selectedOption)}
          selectedOption={alignOption}
          className="w-[6rem] text-sm"
          options={[
            "최신순",
            "북마크 많은순",
            "마감일 임박순",
            "입찰수 많은순"
          ]}
        />
      </div>
    </div>
  );
};

export default SearchHeader;
