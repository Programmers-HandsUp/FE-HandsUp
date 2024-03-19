import { SignUpRequest } from "@/utils/types/user/signup";
import { SignUpResponse } from "@/utils/types/user/signup";

export const signUp = async (
  authData: SignUpRequest
): Promise<SignUpResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
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
