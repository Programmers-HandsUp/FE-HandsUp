"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { SignUpRequest } from "@/utils/types/user/signup";

import { signUp } from "../../_api/signUp";

export function useSignUp() {
  const [signupStatus, setSignupStatus] = useState("");
  const { mutate, ...rest } = useMutation({
    mutationFn: (authForm: SignUpRequest) => signUp(authForm),
    onSuccess: () => {
      setSignupStatus("success");
    },
    onError: (error: Error) => {
      setSignupStatus("fail");
    }
  });
  return { signupStatus, mutate, ...rest };
}
