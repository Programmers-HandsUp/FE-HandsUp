import postApiHandler from "./api/auctionPostApis";
import bidsAPIHandler from "./api/bids";
import authApiHandler from "./api/authApis";
import searchApiHandler from "./api/searchApis";
import mypageHandler from "./api/mypageApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...searchApiHandler
  ...mypageHandler,
  ...bidsAPIHandler
];
