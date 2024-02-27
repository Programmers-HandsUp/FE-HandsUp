import InputLabel from "../InputLabel";
import { RegisterProduct } from "../../page";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import InputPrice from "@/app/_component/common/InputPrice";
import { Chip, Chips } from "@/app/_component/common/Chips";
import Icon from "@/app/_component/common/Icon";
import Tooltip from "@/app/_component/common/Tooltip";
import Datepicker from "react-tailwindcss-datepicker";
import SearchAddressBtn from "../SearchAddressBtn";

const TRADEMETHOD_LIST = ["직거래", "택배"] as const;

function AuctionInfo() {
  const {
    control,
    setValue,
    register,
    formState: { errors }
  } = useFormContext<RegisterProduct>();

  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  const description = useWatch({ control, name: "description" });
  const inputCount = description ? description.length : 0;

  const isDirect = useWatch({ control, name: "tradeMethod" }) === "직거래";
  const price = useWatch({ control, name: "price" });

  return (
    <div className="m-2">
      <span className="text-xl mb-4">| 경매정보</span>
      <InputLabel
        name="price"
        errors={errors}>
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <InputPrice<RegisterProduct>
              title="입찰 시작가"
              price={price}
              field={field}
              setValue={() => setValue("price", "0")}
            />
          )}
        />
      </InputLabel>
      <InputLabel
        title={
          <div className="my-3 flex items-center gap-2">
            <span>경매 마감일</span>
            <Tooltip
              eventType="hover"
              position="right"
              content="최소 1일 / 최대 7일까지 선택 가능해요">
              <Icon
                id="info"
                fill="none"
                stroke="black"
              />
            </Tooltip>
          </div>
        }
        name="dateRangeTime"
        errors={errors}>
        <Controller
          control={control}
          name="dateRangeTime"
          render={({ field }) => (
            <Datepicker
              minDate={new Date()}
              maxDate={maxDate}
              placeholder={"날짜 선택하기"}
              useRange={false}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </InputLabel>
      <InputLabel
        title="거래 방식"
        name="tradeMethod"
        errors={errors}>
        <Controller
          control={control}
          name="tradeMethod"
          render={({ field }) => (
            <Chips
              Items={field.value}
              setItems={field.onChange}
              className="pt-2">
              {TRADEMETHOD_LIST.map((method) => (
                <Chip
                  key={method}
                  value={method}
                  className="w-24">
                  {method}
                </Chip>
              ))}
            </Chips>
          )}
        />
      </InputLabel>
      {isDirect && (
        <InputLabel
          title="거래 희망 장소"
          name="address"
          errors={errors}>
          <Controller
            control={control}
            name="address"
            render={({ field }) => <SearchAddressBtn field={field} />}
          />
        </InputLabel>
      )}

      <InputLabel
        name="description"
        errors={errors}>
        <textarea
          {...register("description")}
          style={{ resize: "none" }}
          className="mt-4 p-4 border border-gray-200 w-full h-48 rounded-lg"
          placeholder={
            "상품 및 경매 관련해서 추가적인 정보를 입력해주세요. \n안전하고 건전한 거래환경을 만들어가요 🙌🏻"
          }></textarea>
        <div className="flex justify-end">{inputCount}/1000</div>
      </InputLabel>
    </div>
  );
}

export default AuctionInfo;
