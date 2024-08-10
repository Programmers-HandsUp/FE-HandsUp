import { SignUpRequest } from "@/utils/types/user/signup";

export const signUp = async (authData: SignUpRequest) => {
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
    return true;
  }
  throw new Error(response.status.toString());
};
