import { useMutation, useQueryClient } from "@tanstack/react-query";

import patchCancelBidder from "../_api/patchCancelBidder";

const usePatchTransactionCancel = ({ auctionId }: { auctionId: number }) => {
  const queryClient = useQueryClient();
  const completeTransactionMutation = useMutation({
    mutationFn: patchCancelBidder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    }
  });

  return { mutation: completeTransactionMutation };
};
export default usePatchTransactionCancel;
