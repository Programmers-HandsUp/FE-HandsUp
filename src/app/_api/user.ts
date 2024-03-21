import { authCheck } from "@/utils/function/authCheck";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

export const getLoginUserInfo = async (): Promise<
  CheckLoginUserResponse | undefined
> => {
  const isTokenValid = authCheck();

  try {
    if (!isTokenValid) throw new Error("401");

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
  return undefined;
};
