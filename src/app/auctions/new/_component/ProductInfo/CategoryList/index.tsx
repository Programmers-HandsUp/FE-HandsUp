import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import Icon from "@/app/_component/common/Icon";
import { RegisterAuction } from "@/app/auctions/new/page";

import { CATEGORY_LIST } from "../../../_utils/constants";

interface CategoryListProps {
  field: ControllerRenderProps<RegisterAuction, "productCategory">;
}
function CategoryList({ field }: CategoryListProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button
        className="w-full"
        type="button"
        onClick={() => setIsShow(!isShow)}>
        <div className="flex justify-between py-2.5 px-3 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <span>{field.value || "카테고리를 선택해주세요"}</span>
          <Icon
            id="drop-down"
            stroke="black"
          />
        </div>
      </button>
      <div
        className={`h-60 overflow-y-auto border border-solid rounded transition-all ${isShow ? "opacity-100 max-h-60 transition ease-out duration-300" : "opacity-0 max-h-0 overflow-hidden transition ease-in duration-200"}`}>
        <ul className="flex flex-col border-solid border-gray-300">
          {CATEGORY_LIST.map((category) => (
            <li
              key={uuidv4()}
              onClick={() => {
                field.onChange(category);
                setIsShow(false);
              }}
              className="flex items-center h-10 p-3 border border-[#96E4FF] hover:bg-[#96E4FF]">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CategoryList;
