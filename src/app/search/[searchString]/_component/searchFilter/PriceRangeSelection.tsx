import { useFormContext } from "react-hook-form";

import Input from "@/app/_component/common/Input";

export default function PriceRangeSelection() {
  const { register } = useFormContext();
  return (
    <div className="ml-4">
      <h2 className="ml-1 mt-4 text-xl">희망 가격</h2>
      <div className="px-3 flex mt-3">
        <div className="flex">
          <Input className="w-[9rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[6.7rem] text-xl py-2 px-1 text-end"
              type="number"
              {...register("minPrice", {
                setValueAs: (value) => parseInt(value)
              })}
            />
            <label className="text-gray-500 my-auto text-lg">원</label>
          </Input>
        </div>
        <span className="bg-gray-200 w-4 h-[0.2rem] my-auto" />
        <div className="flex">
          <Input className="w-[9rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[6.7rem] text-xl py-2 px-1 text-end"
              type="number"
              {...register("maxPrice", {
                setValueAs: (value) => parseInt(value)
              })}
            />
            <label className="text-gray-500 my-auto text-lg">원</label>
          </Input>
        </div>
      </div>
    </div>
  );
}
