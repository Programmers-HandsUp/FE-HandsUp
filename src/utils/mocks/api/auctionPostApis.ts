import { http, HttpResponse } from "msw";

import {
  auctionDetail,
  auctionHotList,
  commentData
} from "./data/postListData";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const handlers = [
  http.get("/api/auctionList", async () => {
    await delay(1000);
    return HttpResponse.json(auctionHotList);
  }),
  http.post("/api/comment/create", async ({ request }) => {
    await delay(1000);
    return HttpResponse.text(JSON.stringify("ok"));
  }),
  http.get("/api/auctions/:auctionId", async () => {
    await delay(1000);

    return HttpResponse.json(auctionDetail);
  }),
  http.get("/api/auctions/:auctionId/comments", async ({ request }) => {
    await delay(1000);

    const { searchParams } = new URL(request.url);
    const size = Number(searchParams.get("size"));
    const page = Number(searchParams.get("page"));
    const totalCount = commentData.length;
    const totalPages = Math.ceil(totalCount / size);

    const nextPage = page < totalPages - 1 ? true : false;

    https: return HttpResponse.json({
      content: commentData.slice(page * 10, page * 10 + size),
      size: commentData.slice(page * 10, page * 10 + size).length,
      hasNext: nextPage
    });
  })
];

export default handlers;
