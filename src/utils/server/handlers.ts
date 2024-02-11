import postApiHandler from "./api/auctionPostApis";
import authApiHandler from "./api/authApis";

export const handlers = [...postApiHandler, ...authApiHandler];
