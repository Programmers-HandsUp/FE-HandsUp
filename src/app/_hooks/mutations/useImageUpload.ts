import { useMutation } from "@tanstack/react-query";

import { imageUpload } from "@/app/_api/imageUpload";
import Toast from "@/app/_component/common/Toast";

export const useImageUpload = () => {
  const { show } = Toast();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: imageUpload,
    onSuccess: (data) => {
      return data;
    },
    onError: (err) => {
      show(err.message, "info-solid");
    }
  });

  return {
    mutateImageUpload: mutateAsync,
    ...rest
  };
};
