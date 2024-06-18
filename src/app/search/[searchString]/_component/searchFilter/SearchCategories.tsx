import { useFormContext } from "react-hook-form";

import { Chips } from "@/app/_component/common/Chips";
import { Chip } from "@/app/_component/common/Chips";

import { CATEGORY_LIST } from "../../utils/constants";

interface SearchCategoriesProps {
  selectedCategory: string[];
  setSelectedCategory: (items: string[]) => void;
}

export default function SearchCategories({
  selectedCategory,
  setSelectedCategory
}: SearchCategoriesProps) {
  const { setValue } = useFormContext();
  return (
    <div className="pl-4 pr-2">
      <h1 className="flex text-2xl my-2">카테고리</h1>
      <Chips
        className="grid grid-cols-2 gap-1 px-2 mb-4"
        Items={selectedCategory}
        setItems={(items: string[]) => {
          setSelectedCategory(items);
          setValue("productCategory", items);
        }}>
        {CATEGORY_LIST.map((value) => (
          <Chip
            className="border-2 rounded-md text-slate-500 py-[0.4rem] my-[0.2rem] text-sm"
            selectedStyle="border-[#96E4FF] border-[3px] text-black"
            rounded={"none"}
            key={value}
            value={value}>
            {value}
          </Chip>
        ))}
      </Chips>
    </div>
  );
}
