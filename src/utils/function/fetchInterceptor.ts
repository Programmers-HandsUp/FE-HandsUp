import reissueAccessToken from "@/app/_api/reIssueAccessToken";

import { getCookie } from "./cookie";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

const fetchInterceptor = async (
  url: string,
  options: FetchOptions = {}
): Promise<Response> => {
  const accessToken = getCookie({ name: "accessToken" }).slice(0);
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`
  };
  console.log(accessToken);
  console.log(url);
  let response: Response;
  response = await fetch(url, options);
  console.log(response);
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

export { fetchInterceptor };
