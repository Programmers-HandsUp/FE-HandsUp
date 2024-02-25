import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import InputLabel from "../InputLabel";
import CategoryList from "./CategoryList";
import { Chip, Chips } from "@/app/_component/common/Chips";
import { RegisterProduct } from "@/app/products/new/page";
import { ImagePreviewer, ImageUploader } from "./ImageUploader";

const STATE_LIST = ["미개봉", "깨끗해요", "사용감"] as const;
const PURCHASE_TIME_LIST = ["1개월이하", "3개월이하", "6개월이하", "1년이하", "1년이상", "모름"] as const;

function ProductInfo() {
  const {
    control,
    watch,
    register,
    formState: { errors }
  } = useFormContext<RegisterProduct>();

  const { fields, append, remove } = useFieldArray({
    name: "images",
    keyName: "imagesId",
    control
  });

  const imageFile = watch("images");

  return (
    <div className="m-2 pb-4">
      <p className="text-xl mb-4">| 상품정보</p>
      <InputLabel
        title="사진"
        name="images"
        errors={errors}>
        <div className="flex w-full gap-2">
          <ImageUploader
            imageFile={imageFile}
            onAppend={append}
          />
          <ImagePreviewer
            fields={fields}
            onRemove={remove}
          />
        </div>
      </InputLabel>
      <InputLabel
        title="상품명"
        name="title"
        errors={errors}>
        <input
          {...register("title")}
          className={`w-full h-9 px-3 rounded-lg border ${errors["title"] ? "border-red-600" : ""}`}
          placeholder="상품명"
        />
      </InputLabel>
      <InputLabel
        title="카테고리"
        name="category"
        errors={errors}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => <CategoryList field={field} />}
        />
      </InputLabel>
      <InputLabel
        title="상품상태"
        name="state"
        errors={errors}>
        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <Chips
              Items={field.value}
              setItems={field.onChange}
              size={90}>
              {STATE_LIST.map((value) => (
                <Chip
                  key={value}
                  value={value}>
                  {value}
                </Chip>
              ))}
            </Chips>
          )}
        />
      </InputLabel>
      <InputLabel
        title="구매시기"
        name="purchaseTime"
        errors={errors}>
        <Controller
          control={control}
          name="purchaseTime"
          defaultValue={undefined}
          render={({ field }) => (
            <Chips
              Items={field.value}
              setItems={field.onChange}
              size={90}>
              {PURCHASE_TIME_LIST.map((value) => (
                <Chip
                  key={value}
                  value={value}>
                  {value}
                </Chip>
              ))}
            </Chips>
          )}
        />
      </InputLabel>
    </div>
  );
}

export default ProductInfo;
