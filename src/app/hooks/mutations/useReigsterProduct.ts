import Toast from "@/app/_component/common/Toast";
import { registerProduct } from "@/app/api/registerProduct";
import { useMutation } from "@tanstack/react-query";

export const useRegisterProduct = () => {
  const { show } = Toast();

  const registerProductMutation = useMutation({
    mutationFn: registerProduct,
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
    mutateRegisterProduct: registerProductMutation.mutate
  };
};
