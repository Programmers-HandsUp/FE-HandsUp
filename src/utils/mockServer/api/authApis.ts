import { HttpResponse, handleRequest, http } from "msw";

import { authDataType } from "./types";
import { userAuthData } from "./data/authData";
import { mockTokens } from "./data/token";

const isAuthData = (data: any): data is authDataType => {
  return typeof data.email === "string" && typeof data.password === "string";
};

const handler = [
  http.post("/api/signup", async ({ request }) => {
    try {
      const authData = (await request.json()) as any;
      if (!isAuthData(authData)) {
        throw new Error("로그인 폼 데이터 에러");
      }
      userAuthData.push(authData);
      return new HttpResponse(null, { status: 200 });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),

  http.post("/api/login", async ({ request }) => {
    try {
      const authData = (await request.json()) as any;
      if (!isAuthData(authData)) {
        throw new Error("로그인 폼 데이터 에러");
      }
      for (const member of userAuthData) {
        if (
          authData.email === member.email &&
          authData.password === member.password
        ) {
          return new HttpResponse(JSON.stringify(mockTokens), {
            status: 200,
          });
        }
      }
      return new HttpResponse(null, { status: 401 });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
];

export default handler;
