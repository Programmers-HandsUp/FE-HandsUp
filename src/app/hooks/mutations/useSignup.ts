import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";

import { signUp } from "@/app/api/auth";
import Toast from "@/app/_component/common/Toast";
import { LoginFormValues } from "@/app/types/loginform";

export function useSignUp() {
  const { show } = Toast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (authForm: LoginFormValues) => await signUp(authForm),
    onSuccess: (data) => {
      localStorage.setItem("AccessToken", data.accessToken);
      router.push("/");
    },
    onError: (error: Error) => {
      switch (Number(error.message)) {
        case 401:
          show("아이디 또는 비밀번호가 틀렸습니다.", "warn-solid", 2000);
          break;
      }
    }
  });
}
