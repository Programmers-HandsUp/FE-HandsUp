import reissueAccessToken from "@/app/_api/reIssueAccessToken";

import { authCheck } from "./authCheck";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
  next?: {
    tags: string[];
  };
  cache?: RequestCache;
}

const fetchWithTokenRenewal = async (
  url: string,
  options: FetchOptions = {
    cache: "no-store"
  }
): Promise<Response | null> => {
  let response: Response = new Response();
  let isSuccess = false;

  const accessToken = authCheck();

  if (accessToken) {
    isSuccess = true;
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`
    };
    response = await fetch(url, options);
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
  }
  return isSuccess ? response : null;
};

export { fetchWithTokenRenewal };
