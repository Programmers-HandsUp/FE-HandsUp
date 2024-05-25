import { useForm } from "react-hook-form";

export default function TradeMethodSelection() {
  const { register } = useForm();

  return (
    <div className="bg-white mb-4 ml-4">
      <h2 className="text-2xl mt-4 mb-2">거래 방식</h2>
      <div className="flex gap-2 mx-2">
        <label>
          <input
            type="radio"
            id="direct"
            value="직거래"
            className="peer hidden"
            {...register("tradeMethod")}
          />
          <div className="hover:bg-gray-50 flex items-center justify-between w-[9rem] px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
            <h2 className="font-medium text-gray-700">직거래</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </label>
        <label>
          <input
            type="radio"
            id="direct"
            value="직거래"
            className="peer hidden"
            {...register("tradeMethod")}
          />
          <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 w-[9rem] border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
            <h2 className="font-medium text-gray-700">택배</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </label>
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
