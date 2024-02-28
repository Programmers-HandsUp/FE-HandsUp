import { useMutation } from "@tanstack/react-query";
import { setLogin } from "@/app/api/auth";
import Toast from "@/app/_component/common/Toast";

type LoginFormValues = {
  email: string;
  password: string;
};
export function useSignUp() {
  const { show } = Toast();

  return useMutation({
    mutationFn: async (authForm: LoginFormValues) => await setLogin(authForm),
    onSuccess: (data) => {
      localStorage.setItem("AccessToken", data.accessToken);
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
