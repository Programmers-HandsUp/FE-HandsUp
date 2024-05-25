import { useForm } from "react-hook-form";

import Input from "@/app/_component/common/Input";

export default function PriceRangeSelection() {
  const { register } = useForm();

  return (
    <>
      <h2 className="mt-4 text-xl">금액</h2>
      <div className="px-3">
        <div className="flex">
          <label className="my-auto mr-4 text-lg">이상</label>
          <Input className="w-[14rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[11.5rem] text-2xl py-2 px-1 text-end"
              type="number"
              {...register("minPrice", {
                setValueAs: (value) => parseInt(value)
              })}
            />
            <label className="text-black my-auto text-2xl">원</label>
          </Input>
        </div>
        <div className="flex">
          <label className="my-auto mr-4 text-lg">이하</label>
          <Input className="w-[14rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[11.5rem] text-2xl py-2 px-1 text-end"
              type="number"
              {...register("maxPrice", {
                setValueAs: (value) => parseInt(value)
              })}
            />
            <label className="text-black my-auto text-2xl">원</label>
          </Input>
        </div>
      </div>
    </>
  );
}
