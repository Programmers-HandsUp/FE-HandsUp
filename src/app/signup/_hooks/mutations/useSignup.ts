import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { SignUpRequest } from "@/utils/types/user/signup";

import { signUp } from "../../_api/signUp";

export function useSignUp() {
  const router = useRouter();
  return useMutation({
    mutationFn: (authForm: SignUpRequest) => signUp(authForm),
    onSuccess: (data) => {
      console.log(data.userId);
      router.push("/");
    },
    onError: (error: Error) => {
      console.log(error);
    }
  });
}
