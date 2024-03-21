import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

export const getLoginUserInfo =
  async (): Promise<CheckLoginUserResponse | null> => {
    try {
      const res = await fetchWithTokenRenewal(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`
      );

      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res.json();
    } catch (error: any) {
      console.error(error.message);
    }
    return null;
  };
