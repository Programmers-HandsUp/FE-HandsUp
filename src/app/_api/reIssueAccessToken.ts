import { setCookie } from "@/utils/function/cookie";

const reissueAccessToken = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/token`,
      {
        method: "POST",
        credentials: "include"
      }
    );
    const result = await response.json();

    setCookie({ name: "accessToken", value: result.token });
    return result.token;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default reissueAccessToken;
