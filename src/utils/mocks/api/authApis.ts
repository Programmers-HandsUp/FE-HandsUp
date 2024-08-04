import { http, HttpResponse } from "msw";

import { userAuthData } from "../mockData/authData";
import { mockTokens } from "../mockData/token";
import { userAuthType } from "./types";

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
      if (
        userAuthData.filter((authItem) => authItem.email === authData.email)
          .length
      ) {
        throw new Error("중복된 아이디가 있음");
      }
      userAuthData.push(authData);
      return new HttpResponse(JSON.stringify(mockTokens.accessToken), {
        headers: {
          "Set-Cookie": `token=${mockTokens.refreshToken}`
        },
        status: 200
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
  http.get("/api/idduplicatecheck/:id", async ({ params }) => {
    try {
      const { id } = params;
      if (!id || typeof id !== "string") {
        throw new Error("아이디 데이터가 없습니다.");
      }
      if (userAuthData.filter((authItem) => authItem.email === id).length) {
        return new HttpResponse(null, { status: 401 });
      } else {
        return new HttpResponse(null, { status: 200 });
      }
    } catch (error) {
      return new HttpResponse(null, { status: 401 });
    }
  }),
  http.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
    async ({ request }) => {
      const authRequestInform = await request.json();
      if (!isAuthData(authRequestInform)) {
        return new HttpResponse("데이터 타입이 틀립니다.", { status: 400 });
      }
      const isUser = userAuthData.find(
        (authItem) =>
          authItem.email === authRequestInform.email &&
          authRequestInform.password === authItem.password
      );
      if (isUser) {
        return new HttpResponse(null, {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `accessToken=${mockTokens.accessToken}`
          },
          status: 200
        });
      }
      return new HttpResponse(null, {
        status: 401
      });
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
    async ({ request }) => {
      try {
        const userToken = request.headers.get("Authorization");

        if (!userToken || !userToken.startsWith("Bearer ")) {
          throw new Error("토큰이 없거나 형식이 잘못되었습니다");
        }
        const CheckLoginUserResponse = {
          email: "a@a.com",
          password: "abcd",
          address: {
            si: "서울",
            gu: "구로",
            dong: "항동"
          },
          reportCount: 0,
          readNotificationCount: 0
        };

        return new HttpResponse(JSON.stringify(CheckLoginUserResponse), {
          status: 200
        });
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
  )
];

export default handler;
