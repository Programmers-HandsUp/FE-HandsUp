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
): Promise<Response> => {
  let response: Response = new Response();

  const accessToken = authCheck();
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
