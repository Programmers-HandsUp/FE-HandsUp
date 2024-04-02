import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

import { userLogout } from "../../_api/mypage";
import { deleteCookie } from "../../_utils/deleteCookie";

export const useLogout = () => {
  const { show } = Toast();
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: userLogout,
    onSuccess() {
      show("로그아웃", "check-solid");
      deleteCookie();
      router.replace("/home");
    },
    onError(err) {
      show(err.message, "warn-solid");
    }
  });

  return {
    mutateLogout: logoutMutation.mutate
  };
};
