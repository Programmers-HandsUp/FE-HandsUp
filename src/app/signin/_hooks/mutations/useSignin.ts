import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";
import { setCookie } from "@/utils/function/cookie";
import { LoginRequest } from "@/utils/types/authorization/login";

import { signIn } from "../../_api/login";
import { navigate } from "./redirectActionsHome";

export function useSignIn() {
  const { show } = Toast();

  return useMutation({
    mutationFn: (authForm: LoginRequest) => signIn(authForm),
    onSuccess: (data) => {
      setCookie({ name: "accessToken", value: data.accessToken });
      show("로그인 성공했습니다", "check-solid", 2000);
      navigate();
    },
    onError: () => {
      show("로그인 실패했습니다", "warn-solid", 2000);
    }
  });
}
