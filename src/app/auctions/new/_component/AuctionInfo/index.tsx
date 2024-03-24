import { Controller, useFormContext, useWatch } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";

import { Chip, Chips } from "@/app/_component/common/Chips";
import Icon from "@/app/_component/common/Icon";
import InputPrice from "@/app/_component/common/InputPrice";
import Tooltip from "@/app/_component/common/Tooltip";

import { TRADEMETHOD_LIST } from "../../_utils/constants";
import { RegisterAuction } from "../../page";
import InputLabel from "../InputLabel";
import SearchAddressBtn from "../SearchAddressBtn";

function AuctionInfo() {
  const {
    control,
    setValue,
    register,
    reset,
    formState: { errors }
  } = useFormContext<RegisterAuction>();

  const maxDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const description = useWatch({ control, name: "description" });
  const inputCount = description ? description.length : 0;

  const isDirect = useWatch({ control, name: "tradeMethod" }) === "직거래";
  const price = useWatch({ control, name: "initPrice" });

  if (!isDirect) setValue("address", { si: "", gu: "", dong: "" });

  return (
    <div className="m-2">
      <span className="text-xl mb-4">| 경매정보</span>
      <InputLabel
        name="initPrice"
        errors={errors}>
        <Controller
          control={control}
          name="initPrice"
          render={({ field }) => (
            <InputPrice<RegisterAuction, "initPrice">
              title="입찰 시작가"
              price={price}
              field={field}
              reset={() => setValue("initPrice", 0)}
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
          defaultValue={{ startDate: "", endDate: "" }}
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
          defaultValue=""
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
            defaultValue={{ si: "", gu: "", dong: "" }}
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
          defaultValue=""
          placeholder={
            "상품 및 경매 관련 추가적인 정보를 입력해주세요. \n안전하고 건전한 거래환경을 만들어가요 🙌🏻"
          }></textarea>
        <div className="flex justify-end">{inputCount}/1000</div>
      </InputLabel>
    </div>
  );
}

export default AuctionInfo;
