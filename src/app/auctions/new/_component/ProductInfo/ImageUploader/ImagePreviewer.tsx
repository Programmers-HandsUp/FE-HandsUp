import Image from "next/image";
import {
  Controller,
  FieldArrayWithId,
  UseFieldArrayRemove,
  useFormContext
} from "react-hook-form";

import Icon from "@/app/_component/common/Icon";
import { RegisterAuction } from "@/app/auctions/new/page";
interface ImagePreviewerProps {
  fields: FieldArrayWithId<RegisterAuction, "images", "imagesId">[];
  onRemove: UseFieldArrayRemove;
}

export function ImagePreviewer({ fields, onRemove }: ImagePreviewerProps) {
  const { control } = useFormContext<RegisterAuction>();

  return (
    <div className="flex gap-2 whitespace-nowrap overflow-x-auto overflow-y-hidden">
      {fields.map(({ imagesId, file }, index) => (
        <div key={imagesId}>
          <Controller
            control={control}
            name={`images.${index}`}
            render={() => (
              <div className="relative bg-gray-100 w-20 h-20 rounded-lg flex justify-center items-center overflow-hidden">
                <Image
                  alt={`상품 이미지 ${index}`}
                  src={URL.createObjectURL(file)}
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="absolute top-0 right-0">
                  <Icon
                    id="close-ring"
                    stroke="gray"
                    fill="white"
                    size={20}
                  />
                </button>
              </div>
            )}
          />
        </div>
      ))}
    </div>
  );
}
