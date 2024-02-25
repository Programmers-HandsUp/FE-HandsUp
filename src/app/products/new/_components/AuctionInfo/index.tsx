import InputLabel from "../InputLabel";
import { RegisterProduct } from "../../page";
import { Controller, useFormContext } from "react-hook-form";
import InputPrice from "@/app/_component/common/InputPrice";
import Icon from "@/app/_component/common/Icon";
import Tooltip from "@/app/_component/common/Tooltip";
import Datepicker from "react-tailwindcss-datepicker";

function AuctionInfo() {
  const {
    control,
    watch,
    reset,
    register,
    formState: { errors }
  } = useFormContext<RegisterProduct>();
  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  const inputCount = watch("description") ? watch("description").length : 0;

  return (
    <div className="m-2">
      <p className="text-xl mb-4">| 경매정보</p>
      <InputLabel
        name="price"
        errors={errors}>
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <InputPrice
              title="입찰 시작가"
              price={watch("price")}
              field={field}
              handleReset={() => reset()}
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
    </div>
  );
}

export default AuctionInfo;
