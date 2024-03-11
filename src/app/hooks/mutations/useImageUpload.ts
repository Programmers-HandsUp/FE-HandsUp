import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";
import { imageUpload } from "@/app/api/imageUpload";

export const useImageUpload = () => {
  const { show } = Toast();

  const imageUploadMutation = useMutation({
    mutationFn: imageUpload,
    onSuccess: (data) => {
      return data;
    },
    onError: (err) => {
      show(err.message, "info-solid");
    }
  });

  return {
    mutateImageUpload: imageUploadMutation.mutateAsync
  };
};
