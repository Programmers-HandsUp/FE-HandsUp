import { ChangeEvent } from "react";
import { formatPriceWithUnits } from "./formatPrice";
import PriceButton from "./PriceButton";
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReset
} from "react-hook-form";

interface InputPriceProps<
  TField extends FieldValues,
  TFieldName extends FieldPath<TField>
> {
  title: "입찰 시작가" | "제안가";
  price: number;
  field: ControllerRenderProps<TField, TFieldName>;
  reset: UseFormReset<TField>;
}

type onChangeType = (price: number) => void;

const PRICE_UNIT = [10000, 50000, 100000, 500000] as const;
type Unit = (typeof PRICE_UNIT)[number];

function InputPrice<
  TField extends FieldValues,
  TFieldName extends FieldPath<TField>
>({ title, price, field, reset }: InputPriceProps<TField, TFieldName>) {
  /** 버튼을 이용해 값을 더하는 함수 */
  const handleAddPrice = (unit: Unit, onChange: onChangeType) => {
    const newPrice = price !== undefined ? price + unit : unit;
    onChange(newPrice);
  };

  /** 숫자가아닌 값이 입력되면 삭제 */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: onChangeType
  ) => {
    const formattedValue = parseInt(e.target.value.replace(/\D/g, ""), 10) || 0;

    onChange(formattedValue);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <div className="flex justify-end items-center">
          <div>
            <input
              {...field}
              autoComplete="off"
              className="h-7 text-right text-lg font-bold px-2 bg-transparent dark:text-white"
              placeholder={`${title} 입력`}
              value={price ? price.toLocaleString() : ""}
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
        {PRICE_UNIT.map((unit) => (
          <PriceButton
            key={unit}
            handleClickEvent={() => handleAddPrice(unit, field.onChange)}>
            +{Math.floor(unit / 10000)}만
          </PriceButton>
        ))}
        <PriceButton handleClickEvent={reset}>초기화</PriceButton>
      </div>
    </>
  );
}

export default InputPrice;
