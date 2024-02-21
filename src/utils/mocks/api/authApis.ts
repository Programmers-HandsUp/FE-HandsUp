import { HttpResponse, http } from "msw";

import { userData } from "./data/userData";
import { userAuthType } from "./types";
import { userAuthData } from "./data/authData";
import { mockTokens } from "./data/token";

const isAuthData = (data: any): data is userAuthType => {
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
  http.get("/api/userinfo", async ({ request }) => {
    try {
      const authHeader = request.headers.get("Authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("토큰이 없거나 형식이 잘못되었습니다");
      }
      const token = authHeader.slice(7);

      if (!userData[token]) {
        throw new Error("토큰이 유효하지 않습니다");
      }
      return new HttpResponse(JSON.stringify(userData[token]), { status: 200 });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
];

export default handler;
