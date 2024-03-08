import { delay, http, HttpResponse } from "msw";

import { bidsData, topThreeRank } from "./data/bidData";

const handlers = [
  http.get("/api/auctions/:auctionId/bids/top3", async () => {
    await delay(1000);
    return HttpResponse.json(topThreeRank);
  }),
  http.get("/api/auctions/:auctionId/bids", async () => {
    await delay(1000);
    return HttpResponse.json(bidsData);
  })
];

export default handlers;
