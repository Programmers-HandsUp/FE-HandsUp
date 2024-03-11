import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";
import { setLogin } from "@/app/_api/auth";
import { LoginFormValues } from "@/app/types/loginForm";

export function useSignIn() {
  const { show } = Toast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (authForm: LoginFormValues) => await setLogin(authForm),
    onSuccess: (data) => {
      localStorage.setItem("AccessToken", data.accessToken);
      show("회원가입에 성공했습니다", "check-solid", 2000);
      router.push("/");
    },
    onError: () => {
      show("회원가입에 실패했습니다", "warn-solid", 2000);
    }
  });
}
