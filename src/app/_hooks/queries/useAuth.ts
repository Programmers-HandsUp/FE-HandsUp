import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";
import { idduplicatecheck, setLogin } from "@/app/api/auth";

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

export function useSignIn() {
  const { show } = Toast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (authForm: LoginFormValues) => await setLogin(authForm),
    onSuccess: (data) => {
      localStorage.setItem("AccessToken", data.accessToken);
      router.push("/");
    },
    onError: (error: Error) => {
      switch (Number(error.message)) {
        case 401:
          show("회원가입에 실패했습니다", "warn-solid", 2000);
          break;
      }
    }
  });
}

export const useIdDuplicateCheck = (
  setIdStatus: (status: "None" | "Change" | "Ok") => void
) => {
  const { show } = Toast();

  return useMutation({
    mutationFn: (id: string) => idduplicatecheck(id),
    onSuccess: () => {
      setIdStatus("Ok");
    },
    onError: (error: Error) => {
      switch (Number(error.message)) {
        case 401:
          setIdStatus("None");
          show("해당 아이디는 사용할 수 없습니다.", "warn-solid", 2000);
          break;
      }
    }
  });
};
