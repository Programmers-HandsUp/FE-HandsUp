import { LoginRequest } from "@/utils/types/authorization/login";
import { TokenResponse } from "@/utils/types/authorization/token";

export const signUp = async (
  authData: LoginRequest
): Promise<TokenResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(authData)
    }
  );
  if (response.ok) {
    const token = await response.json();
    return token;
  }
  throw new Error(response.status.toString());
};
