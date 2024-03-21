import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import { registerAction } from "../../_api/registerAuction";

export const useRegisterAuction = () => {
  const { show } = Toast();

  const registerAuctionMutation = useMutation({
    mutationFn: registerAction,
    onError(err) {
      show(err.message, "warn-solid");
    }
  });

  return {
    mutateRegisterAuction: registerAuctionMutation.mutate
  };
};
