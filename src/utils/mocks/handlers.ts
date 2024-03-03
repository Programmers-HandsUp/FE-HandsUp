import postApiHandler from "./api/auctionPostApis";
import bidsAPIHandler from "./api/bids";
import authApiHandler from "./api/authApis";

export const handlers = [
  ...postApiHandler,
  ...authApiHandler,
  ...bidsAPIHandler
];
