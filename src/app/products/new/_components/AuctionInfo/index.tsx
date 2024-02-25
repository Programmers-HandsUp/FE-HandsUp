import InputLabel from "../InputLabel";
import { RegisterProduct } from "../../page";
import { Controller, useFormContext } from "react-hook-form";
import InputPrice from "@/app/_component/common/InputPrice";

function AuctionInfo() {
  const {
    control,
    watch,
    reset,
    register,
    formState: { errors }
  } = useFormContext<RegisterProduct>();

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
    </div>
  );
}

export default AuctionInfo;
