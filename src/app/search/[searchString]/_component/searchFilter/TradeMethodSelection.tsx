import { useFormContext } from "react-hook-form";

export default function TradeMethodSelection() {
  const { register } = useFormContext();

  return (
    <div className="bg-white mb-4 ml-4">
      <h2 className="text-xl mt-4 mb-3">거래 방식</h2>
      <div className="flex gap-4 mx-3">
        <label>
          <input
            type="radio"
            id="direct"
            value="직거래"
            className="peer hidden"
            {...register("tradeMethod")}
          />
          <div className="hover:bg-gray-50 flex items-center justify-between w-[9rem] px-4 py-1 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
            <h2 className="font-medium text-gray-700">직거래</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
          <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-1 w-[9rem] border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
            <h2 className="font-medium text-gray-700">택배</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
}
