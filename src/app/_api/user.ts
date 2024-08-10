import { authCheck } from "@/utils/function/authCheck";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

export const getLoginUserInfo =
  async (): Promise<CheckLoginUserResponse | null> => {
    const isTokenValid = authCheck();
    try {
      if (!isTokenValid) return null;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${isTokenValid}`
          }
        }
      );
      return res.json();
    } catch (error: any) {
      if (error.status !== 401) {
        throw new Error(error.message);
      }
    }

    return null;
  };
