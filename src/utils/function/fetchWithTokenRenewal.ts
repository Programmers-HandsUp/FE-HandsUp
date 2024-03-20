"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import reissueAccessToken from "@/app/_api/reIssueAccessToken";
import Toast from "@/app/_component/common/Toast";

import { getCookie } from "./cookie";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

interface fetchWithTokenRenewalTypes {
  url: string;
  options?: FetchOptions;
  router?: AppRouterInstance;
}

const fetchWithTokenRenewal = async ({
  url,
  options = {},
  router
}: fetchWithTokenRenewalTypes): Promise<Response> => {
  const { show } = Toast();
  const accessToken = getCookie({ name: "accessToken" }).slice(0);
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`
  };
  let response: Response;
  response = await fetch(url, options);
  if (!response.ok) {
    const newToken = await reissueAccessToken();
    if (!newToken) {
      show("로그인이 필요합니다.", "warn-solid", 3000);
      if (router) {
        router.push("/signin");
      }
    }
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${newToken}`
    };
    response = await fetch(url, options);
  }
  return response;
};

export { fetchWithTokenRenewal };
