import postApiHandler from "./api/auctionPostApis";
import authApiHandler from "./api/authApis";
import searchApiHandler from "./api/searchApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...searchApiHandler
];
