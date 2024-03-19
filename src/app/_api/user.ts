import { authCheck } from "@/utils/function/authCheck";

export const getLoginUserInfo = async () => {
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
};
