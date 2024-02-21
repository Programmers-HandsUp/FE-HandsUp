import { ChangeEvent } from "react";
import {
  Control,
  Controller,
  UseFormReset,
  UseFormSetValue
} from "react-hook-form";
import { formatPrice, formatPriceWithUnits } from "./utils/formatPrice";
import PriceButton from "./_component/PriceButton";

export type Unit = 10000 | 50000 | 100000 | 500000;

interface Inputs {
  price: string | number;
}

interface InputPriceProps {
  title: string;
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  reset: UseFormReset<Inputs>;
  price: string | number;
}

export type OnChangeType = (
  value: string | number | React.ChangeEvent<HTMLInputElement>
) => void;

function InputPrice({
  title,
  reset,
  control,
  price,
  setValue
}: InputPriceProps) {
  const units: Unit[] = [10000, 50000, 100000, 500000];

  /** 버튼을 이용해 값을 더하는 함수 */
  const handleAddPrice = (unit: Unit, onChange: OnChangeType) => {
    const currentPrice = price !== undefined ? formatPrice(price) : 0;
    const newPrice = (currentPrice + unit).toLocaleString();
    const money = setValue("price", newPrice);
    onChange(newPrice);
  };

  /** 숫자가아닌 값이 입력되면 삭제 + 3자리 콤마 추가 */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: OnChangeType
  ) => {
    const formattedValue = e.target.value
      .replace(/\D/g, "")
      .toLocaleString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    onChange(formattedValue);
  };

  return (
    <Controller
      control={control}
      name="price"
      defaultValue=""
      render={({ field }) => (
        <>
          <div className="flex justify-between items-center">
            <span>{title}</span>
            <div className="flex justify-end items-center">
              <div>
                <input
                  {...field}
                  type="text"
                  className="h-7 text-right text-lg font-bold px-2"
                  placeholder={`${title} 입력`}
                  onChange={(e) => handleInputChange(e, field.onChange)}
                />
                <span className="text-lg">원</span>
                <span className="flex justify-end text-sm text-left text-gray-400">
                  {price ? `${formatPriceWithUnits(price)}원` : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {units.map((unit, index) => (
              <PriceButton
                key={index}
                handleClickEvent={() => handleAddPrice(unit, field.onChange)}>
                +{Math.floor(unit / 10000)}만
              </PriceButton>
            ))}
            <PriceButton handleClickEvent={() => reset()}>초기화</PriceButton>
          </div>
        </>
      )}
    />
  );
}

export default InputPrice;
