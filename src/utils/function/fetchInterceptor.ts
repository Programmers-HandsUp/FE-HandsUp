//import { getCookie } from "@/utils/function/cookie";
//const token = getCookie({ name: "token" });

import reissueAccessToken from "@/app/_api/reIssueAccessToken";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

const fetchInterceptor = async (
  url: string,
  options: FetchOptions = {}
): Promise<Response> => {
  options.headers = {
    ...options.headers,
    Authorization:
      "Bearer aeyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjgsImlhdCI6MTcxMDcyOTc1NywiZXhwIjoxNzExNTkzNzU3fQ.DuApV3unLc_ndHrABqbJNJ4N63U4FhcyOU5lZSlhD-4"
  };
  let response: Response;
  try {
    response = await fetch(url, options);
  } catch (error) {
    let newToken;
    switch (error) {
      default: // 토큰 만료
        newToken = reissueAccessToken();
        break;
    }
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${newToken}`
    };
    response = await fetch(url, options);
  }
  return response;
};

export { fetchInterceptor };
