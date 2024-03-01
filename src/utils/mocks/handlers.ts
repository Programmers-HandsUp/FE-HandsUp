import postApiHandler from "./api/auctionPostApis";
import authApiHandler from "./api/authApis";
import mypageHandler from "./api/mypageApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...mypageHandler
];
