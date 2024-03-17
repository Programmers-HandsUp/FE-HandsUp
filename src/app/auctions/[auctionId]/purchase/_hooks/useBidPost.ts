import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

const postBid = async ({
  auctionId,
  biddingPrice
}: {
  auctionId: number;
  biddingPrice: number;
}): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/bids`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjExLCJpYXQiOjE3MTA2NzgzNzYsImV4cCI6MTcxMTU0MjM3Nn0.mSDS7NCjUKAe8YsxBpwpAtVMMA_fl-i8M8bWLbWGFfY"
      },
      body: JSON.stringify({ biddingPrice })
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export const useBidPost = ({ auctionId }: { auctionId: number }) => {
  const router = useRouter();
  const toast = Toast();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (biddingPrice: number) => postBid({ auctionId, biddingPrice }),
    onSuccess: () => {
      toast.show("입찰에 성공했습니다!", "check-solid", 2000);
      queryClient.invalidateQueries({ queryKey: ["auction"] });
      router.push(`/auctions/${auctionId}`);
    }
  });
  return mutate;
};
