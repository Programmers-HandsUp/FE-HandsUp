import { http, HttpResponse } from "msw";

import { Auction } from "./types";
import { auctionHotList } from "./data/postListData";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

function isPostType(data: any): data is Auction {
  return (
    typeof data.id === "number" &&
    typeof data.authorId === "string" &&
    typeof data.authorName === "string" &&
    typeof data.postName === "string" &&
    typeof data.startPrice === "number" &&
    typeof data.nowPrice === "number" &&
    (typeof data.endtime === "string" || data.endtime instanceof Date) &&
    typeof data.tradePlace === "string" &&
    typeof data.postDetail === "string"
  );
}

const handlers = [
  http.get("/api/hot", async () => {
    await delay(1000);
    return HttpResponse.json(auctionHotList);
  })
];

export default handlers;
