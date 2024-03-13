import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

const usePostReview = async (review: Inputs) => {
  const response = await fetch("http://localhost:9090/api/postListData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function useReviewPost() {
  const { show } = Toast();
  const router = useRouter();

  return useMutation({
    mutationFn: usePostReview,
    onSuccess: () => {
      show("Review posted successfully!", "success-solid", 2000);
      router.push("/");
    },
    onError: (error: Error) => {
      show(`Failed to post review: ${error.message}`, "warn-solid", 2000);
    }
  });
}
