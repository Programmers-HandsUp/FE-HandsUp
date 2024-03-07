import postApiHandler from "./api/auctionPostApis";
import bidsAPIHandler from "./api/bids";
import authApiHandler from "./api/authApis";
import mypageHandler from "./api/mypageApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...mypageHandler,
  ...bidsAPIHandler
];
