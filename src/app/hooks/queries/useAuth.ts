import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";
import { setLogin } from "@/app/api/auth";

type LoginFormValues = {
  email: string;
  password: string;
};
export function useSignUp() {
  const { show } = Toast();
  const router = useRouter();
  return useMutation({
    mutationFn: (authForm: LoginFormValues) => setLogin(authForm),
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
