import { setCookie } from "@/utils/function/cookie";
import { LoginRequest } from "@/utils/types/authorization/login";

export const signIn = async (authData: LoginRequest): Promise<boolean> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(authData)
    }
  );
  const result = await response.json();
  if (response.ok) {
    setCookie({ name: "accessToken", value: result.accessToken });
    return true;
  }
  throw new Error(response.status.toString());
};
