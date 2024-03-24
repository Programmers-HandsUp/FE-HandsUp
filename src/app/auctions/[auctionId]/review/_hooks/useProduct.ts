import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

import { createReview } from "../_api/createReview";

export const usePostReview = () => {
  const router = useRouter();
  const toast = Toast();
  const mutate = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      toast.show("리뷰 등록이 완료되었어요!", "check-solid", 2000);
    }
  });
  return mutate;
};
