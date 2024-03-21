import { getCookie } from "./cookie";

export const authCheck = (): string | undefined => {
  const authCheckFunction =
    typeof window === "undefined"
      ? getServerSideAuthCheck
      : getClientSideAuthCheck;

  const isTokenValid = authCheckFunction();
  return isTokenValid;
};

export const getClientSideAuthCheck = (): string | undefined => {
  const isToken = getCookie({ name: "accessToken" });
  return isToken ? isToken : undefined;
};

export const getServerSideAuthCheck = (): string | undefined => {
  if (typeof window === "undefined") {
    const { cookies } = require("next/headers");
    const cookieStore = cookies();
    return cookieStore.get("accessToken")
      ? cookieStore.get("accessToken").value
      : undefined;
  }
};
