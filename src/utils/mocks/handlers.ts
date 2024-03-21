import postApiHandler from "./api/auctionPostApis";
import authApiHandler from "./api/authApis";
import mypageHandler from "./api/mypageApis";
import notificationHandler from "./api/notificationApis";
import searchApiHandler from "./api/searchApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...searchApiHandler,
  ...mypageHandler,
  ...notificationHandler
];
