"use client";

import reissueAccessToken from "@/app/_api/reIssueAccessToken";

import { getCookie } from "./cookie";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

const fetchWithTokenRenewal = async (
  url: string,
  options: FetchOptions = {}
): Promise<Response> => {
  let response: Response = new Response();
  const accessToken = getCookie({ name: "accessToken" })?.slice(0);
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`
    };
    response = await fetch(url, options);
  }
  if (!response.ok) {
    const newToken = await reissueAccessToken();
    if (newToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${newToken}`
      };
      response = await fetch(url, options);
    }
  }
  return response;
};

export { fetchWithTokenRenewal };
