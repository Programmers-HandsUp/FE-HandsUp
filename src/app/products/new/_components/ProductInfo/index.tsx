import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch
} from "react-hook-form";

import { Chip, Chips } from "@/app/_component/common/Chips";
import { RegisterProduct } from "@/app/products/new/page";
import { ImagePreviewer, ImageUploader } from "./ImageUploader";
import InputLabel from "../InputLabel";
import CategoryList from "./CategoryList";

import {
  STATE_LIST,
  PURCHASE_TIME_LIST
} from "@/app/products/new/_utils/constants";

function ProductInfo() {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext<RegisterProduct>();

  const { fields, append, remove } = useFieldArray({
    name: "images",
    keyName: "imagesId",
    control
  });

  const imageFile = useWatch({ control, name: "images" });

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
          defaultValue=""
          className={`w-full h-9 px-3 rounded-lg border ${errors["title"] ? "border-red-600" : ""}`}
          placeholder="상품명"
        />
      </InputLabel>
      <InputLabel
        title="카테고리"
        name="productCategory"
        errors={errors}>
        <Controller
          name="productCategory"
          control={control}
          render={({ field }) => <CategoryList field={field} />}
        />
      </InputLabel>
      <InputLabel
        title="상품상태"
        name="productStatus"
        errors={errors}>
        <Controller
          control={control}
          name="productStatus"
          render={({ field }) => (
            <Chips
              Items={field.value}
              setItems={field.onChange}>
              {STATE_LIST.map((value) => (
                <Chip
                  key={value}
                  value={value}
                  className="w-24">
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
              className="grid grid-cols-3">
              {PURCHASE_TIME_LIST.map(({ value, title }) => (
                <Chip
                  key={value}
                  value={value}>
                  {title}
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
