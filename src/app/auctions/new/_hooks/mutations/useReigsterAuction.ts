import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import { registerAction } from "../../_api/registerAuction";

export const useRegisterAuction = () => {
  const { show } = Toast();

  const registerAuctionMutation = useMutation({
    mutationFn: registerAction,
    onSuccess(data) {
      show(
        "상품 등록을 완료했어요! 좋은 경매가 되길 바랍니다 😇",
        "check-solid"
      );
      return data;
      // 경매 리스트 query 초기화 필요
    },
    onError(err) {
      show(err.message, "warn-solid");
    }
  });

  return {
    mutateRegisterAuction: registerAuctionMutation.mutate
  };
};
