import { useMutation, useQueryClient } from "@tanstack/react-query";

import patchCancelBidder from "../_api/patchCancelBidder";

const usePatchTransactionCancel = ({
  auctionId,
  biddingId
}: {
  auctionId: number;
  biddingId: number | undefined;
}) => {
  const queryClient = useQueryClient();
  const completeTransactionMutation = useMutation({
    mutationFn: () => patchCancelBidder({ biddingId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    }
  });

  return { mutation: completeTransactionMutation };
};
export default usePatchTransactionCancel;
