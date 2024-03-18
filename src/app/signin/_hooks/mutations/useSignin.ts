import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";
import { setCookie } from "@/utils/function/cookie";
import { LoginRequest } from "@/utils/types/authorization/login";

import { signIn } from "../../_api/login";

export function useSignIn() {
  const { show } = Toast();
  const router = useRouter();
  return useMutation({
    mutationFn: (authForm: LoginRequest) => signIn(authForm),
    onSuccess: (data) => {
      setCookie({ name: "AccessToken", value: data.accessToken });
      show("회원가입에 성공했습니다", "check-solid", 2000);
      router.push("/");
    },
    onError: () => {
      show("회원가입에 실패했습니다", "warn-solid", 2000);
    }
  });
}
