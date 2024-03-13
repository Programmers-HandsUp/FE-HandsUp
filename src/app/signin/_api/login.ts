import { LoginRequest } from "@/utils/types/authorization/login";
import { TokenResponse } from "@/utils/types/authorization/token";

export const signIn = async (
  authData: LoginRequest
): Promise<TokenResponse> => {
  const response = await fetch("http://localhost:9090/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });
  if (response.ok) {
    const token = await response.json();
    return token;
  }
  throw new Error(response.status.toString());
};
