import { useMutation, useQueryClient } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import patchCancelBidder from "../_api/patchCancelBidder";

const usePatchTransactionCancel = ({
  auctionId,
  biddingId
}: {
  auctionId: number;
  biddingId: number | undefined;
}) => {
  const queryClient = useQueryClient();
  const toast = Toast();

  const completeTransactionMutation = useMutation({
    mutationFn: () => patchCancelBidder({ biddingId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    },
    onError: (error) => {
      console.log(error);
      toast.show("에러가 발생했습니다.", "warn-solid", 2000);
    }
  });

  return { mutation: completeTransactionMutation };
};
export default usePatchTransactionCancel;
