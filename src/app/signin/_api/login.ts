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
  console.log(response);
  if (response.ok) {
    return true;
  }
  throw new Error(response.status.toString());
};
