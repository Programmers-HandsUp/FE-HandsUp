import { authCheck } from "@/utils/function/authCheck";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

export const getLoginUserInfo = async (): Promise<CheckLoginUserResponse> => {
  const isTokenValid = authCheck();
  try {
    if (!isTokenValid) throw new Error("유저 토큰이 비어있습니다.");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
      {
        headers: {
          Authorization: `Bearer ${isTokenValid}`
        }
      }
    );

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  } catch (error: any) {
    console.error(error.message);
  }
  throw new Error("토큰 오류");
};
