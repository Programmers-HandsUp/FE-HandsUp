import { useMutation, useQueryClient } from "@tanstack/react-query";

import patchCompleteTransaction from "../_api/patchCompleteTransaction";

const usePatchTransactionComplete = ({
  auctionId,
  biddingId
}: {
  auctionId: number;
  biddingId: number | undefined;
}) => {
  const queryClient = useQueryClient();
  const completeTransactionMutation = useMutation({
    mutationFn: () => patchCompleteTransaction({ biddingId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    }
  });

  return { mutation: completeTransactionMutation };
};
export default usePatchTransactionComplete;
