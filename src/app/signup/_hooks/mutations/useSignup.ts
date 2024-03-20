"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { SignUpRequest } from "@/utils/types/user/signup";

import { signUp } from "../../_api/signUp";

export function useSignUp() {
  const [isSignUpSuccess, setIsSignUpSuccesss] = useState("none");
  const { mutate, ...rest } = useMutation({
    mutationFn: (authForm: SignUpRequest) => signUp(authForm),
    onSuccess: () => {
      setIsSignUpSuccesss("success");
    },
    onError: (error: Error) => {
      setIsSignUpSuccesss("fail");
    }
  });
  return { isSignUpSuccess, mutate, ...rest };
}
