import { HttpResponse, handleRequest, http } from "msw";

import { authDataType } from "./types";
import { userAuthData } from "./data/authData";

const isAuthData = (data: any): data is authDataType => {
  return typeof data.email === "number" && typeof data.password === "string";
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
          authData.id === member.id &&
          authData.passWord === member.passWord
        ) {
          return new HttpResponse(null, {
            status: 200,
          });
        }
      }
      return new HttpResponse(null, { status: 404 });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
];

export default handler;
