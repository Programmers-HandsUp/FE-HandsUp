import { setCookie } from "@/utils/function/cookie";

const reissueAccessToken = async () => {
  try {
    const response = await fetch("/api/auth/tokens");
    const result = await response.json();

    setCookie({ name: "AccessToken", value: result.token });
  } catch (error) {
    console.log(error);
  }
};

export default reissueAccessToken;
