import { useMutation, useQueryClient } from "@tanstack/react-query";

import patchCompleteTransaction from "../_api/patchCompleteTransaction";

const usePatchTransactionComplete = ({ auctionId }: { auctionId: number }) => {
  const queryClient = useQueryClient();
  const completeTransactionMutation = useMutation({
    mutationFn: patchCompleteTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    }
  });

  return { mutation: completeTransactionMutation };
};
export default usePatchTransactionComplete;
