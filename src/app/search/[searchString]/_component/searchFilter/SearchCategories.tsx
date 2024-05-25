import { useForm } from "react-hook-form";

import { Chips } from "@/app/_component/common/Chips";
import { Chip } from "@/app/_component/common/Chips";

interface SearchCategoriesProps {
  selectedCategory: string[];
  setSelectedCategory: (items: string[]) => void;
}

const CATEGORY_LIST = [
  "디지털 기기",
  "가구/인테리어",
  "패션/잡화",
  "생활가전",
  "생활/주방",
  "스포츠/레저",
  "취미/게임/음반",
  "뷰티/미용",
  "반려동물용품",
  "티켓/교환권",
  "도서",
  "기타중고물품"
] as const;

export default function SearchCategories({
  selectedCategory,
  setSelectedCategory
}: SearchCategoriesProps) {
  const { setValue } = useForm();
  return (
    <>
      <h1 className="flex text-2xl my-1">카테고리</h1>
      <Chips
        className="grid grid-cols-2 px-3"
        Items={selectedCategory}
        setItems={(items: string[]) => {
          setSelectedCategory(items);
          setValue("productCategory", items);
        }}>
        {CATEGORY_LIST.map((value) => (
          <Chip
            className="border-0 w-[7rem] h-[1.5rem] my-0 text-center"
            key={value}
            value={value}>
            {value}
          </Chip>
        ))}
      </Chips>
    </>
  );
}
