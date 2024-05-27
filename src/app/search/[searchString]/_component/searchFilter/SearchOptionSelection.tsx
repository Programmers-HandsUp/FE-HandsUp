import { useFormContext } from "react-hook-form";

export default function SearchOptionSelection() {
  const { register } = useFormContext();
  return (
    <div className="px-3 mt-3 mb-4">
      <h1 className="text-xl mx-2">기타 조건</h1>
      <div className="ml-6 mt-3 mb-2">
        <input
          type="checkbox"
          className="mr-2 pt-4"
          {...register("isNewProduct")}
        />
        <label className="ml-2 text-[0.85rem] font-light">미개봉 상품</label>
      </div>
      <hr />
      <div className="ml-6 mt-2">
        <input
          type="checkbox"
          className="mr-2"
          {...register("isProgress")}
        />
        <label className="ml-2 text-[0.85rem] font-light">
          진행 중인 경매만 보기
        </label>
      </div>
    </div>
  );
}
