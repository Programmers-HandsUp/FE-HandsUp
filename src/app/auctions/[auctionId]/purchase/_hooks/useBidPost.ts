import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

import postBid from "../_api/postBid";

const useBidPost = ({ auctionId }: { auctionId: number }) => {
  const router = useRouter();
  const toast = Toast();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (biddingPrice: number) => postBid({ auctionId, biddingPrice }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auction"] });
      setTimeout(() => {
        toast.show("입찰에 성공했습니다!", "check-solid", 2000);
        router.push(`/auctions/${auctionId}`);
      }, 6700);
    },
    onError: (err) => {
      if (err.message === "401") {
        toast.show("로그인 후 이용해주세요.", "warn-solid", 2000);
      } else {
        toast.show("오류 발생", "warn-solid", 2000);
      }
    }
  });
  return mutate;
};
export default useBidPost;
