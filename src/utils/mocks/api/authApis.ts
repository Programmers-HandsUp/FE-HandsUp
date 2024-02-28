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

  http.post("http://localhost:9090/api/login", async ({ request }) => {
    const authData = (await request.json()) as any;
    if (!isAuthData(authData)) {
      return new HttpResponse("로그인 폼 데이터 에러", { status: 400 });
    }
    for (const member of userAuthData) {
      if (
        authData.email === member.email &&
        authData.password === member.password
      ) {
        return new HttpResponse(JSON.stringify(mockTokens.accessToken), {
          headers: {
            "Set-Cookie": `token=${mockTokens.refreshToken}`
          },
          status: 200
        });
      }
    }
    return new HttpResponse("에러", { status: 401 });
  }),
  http.get("/api/userinfo", async ({ cookies, request }) => {
    try {
      const authHeader = request.headers.get("Authorization");

      if (!cookies.token) {
        return new HttpResponse(null, { status: 403 });
      }
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
  })
];

export default handler;
