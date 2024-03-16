import { getCookie } from "./cookie";

export const authCheck = () => {
  const authCheckFunction =
    typeof window === "undefined"
      ? getServerSideAuthCheck
      : getClientSideAuthCheck;

  const isTokenValid = authCheckFunction();

  return isTokenValid;
};

export const getClientSideAuthCheck = () => {
  const isToken = getCookie({ name: "token" });
  return isToken;
};

export const getServerSideAuthCheck = () => {
  if (typeof window === "undefined") {
    const { cookies } = require("next/headers");
    const cookieStore = cookies();
    return cookieStore.get("token") !== undefined
      ? cookieStore.get("token").value
      : false;
  }
};
