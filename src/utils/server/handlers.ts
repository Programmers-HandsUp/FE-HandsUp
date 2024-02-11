import postApiHandler from "./api/postApis";
import authApiHandler from "./api/authApis";

export const handlers = [...postApiHandler, ...authApiHandler];
