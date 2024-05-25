import { useForm } from "react-hook-form";

export default function TradeMethodSelection() {
  const { register } = useForm();

  return (
    <div className="bg-white mb-4 ml-4">
      <h2 className="text-2xl mt-4">거래 방식</h2>
      <div className="flex gap-[6.7rem] my-3 px-3">
        <div>
          <input
            className="mr-2 w-4 h-4 text-[#96E4FF] bg-gray-100 border-gray-300 focus:ring-[#96E4FF] dark:focus:text-[#96E4FF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="direct"
            type="radio"
            value="직거래"
            {...register("tradeMethod")}
          />
          <label>직거래</label>
        </div>
        <div>
          <input
            className="mr-2 w-4 h-4 text-[#96E4FF] bg-gray-100 border-gray-300 focus:ring-[#96E4FF] dark:focus:text-[#96E4FF] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="delivery"
            type="radio"
            value="택배"
            {...register("tradeMethod")}
          />
          <label>택배</label>
        </div>
      </div>
      <div className="flex gap-[5rem] px-3">
        <div>
          <input
            type="checkbox"
            className="mr-2"
            {...register("isNewProduct")}
          />
          <label>미개봉 상품</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="mr-2"
            {...register("isProgress")}
          />
          <label className="text-[0.9rem]">진행 중인 경매만 보기</label>
        </div>
      </div>
    </div>
  );
}
