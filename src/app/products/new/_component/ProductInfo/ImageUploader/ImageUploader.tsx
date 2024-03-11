import { UseFieldArrayAppend, useFormContext } from "react-hook-form";

import Icon from "@/app/_component/common/Icon";
import Toast from "@/app/_component/common/Toast";
import { RegisterAuction } from "@/app/products/new/page";

interface ImageUploaderProps {
  onAppend: UseFieldArrayAppend<RegisterAuction, "images">;
  imageFile: { file: File }[];
}

export function ImageUploader({ onAppend, imageFile }: ImageUploaderProps) {
  const { register } = useFormContext<RegisterAuction>();
  const imageLength = imageFile && imageFile.length > 0 ? imageFile.length : 0;
  const { show } = Toast();

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploadedFiles = Array.from(e.target.files);

    if (imageLength + uploadedFiles.length > 10) {
      show("상품 사진은 최대 10개까지 등록 가능해요", "warn-solid", 3000);

      uploadedFiles.splice(0, uploadedFiles.length);
    }

    const newFiles = uploadedFiles.map((file) => ({
      file
    }));

    onAppend([...imageFile, ...newFiles]);
  };

  return (
    <label
      htmlFor="files"
      className="cursor-pointer">
      <div className="bg-gray-100 w-20 h-20 rounded-lg flex flex-col justify-center items-center">
        <Icon id="camera" />
        <p className="text-sm text-gray-400">{imageLength}/10</p>
      </div>
      <input
        className="hidden"
        id="files"
        type="file"
        accept=".jpg, .png, .webp, .jpeg"
        multiple
        {...register("images", {
          required: true,
          onChange: (e) => handleAddFiles(e)
        })}
      />
    </label>
  );
}
