import { http, HttpResponse } from "msw";

import { commentData } from "./data/auctionPost/auctionComment";
import { auctionDetail } from "./data/auctionPost/auctionDetail";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend`,
    async ({ request }) => {
      const { searchParams } = new URL(request.url);
      // const apiDong = searchParams.get("dong");
      const page = Number(searchParams.get("page") || 0);
      const size = Number(searchParams.get("size") || 0);

      const result = auctionDetail.map(
        ({
          auctionId,
          title,
          currentBiddingPrice,
          bookmarkCount,
          dong,
          endDate,
          imageUrls,
          createdAt
        }) => {
          {
            return {
              auctionId,
              title,
              currentBiddingPrice,
              endDate,
              imgUrl: imageUrls[0],
              bookmarkCount,
              dong,
              createdAt
            };
          }
        }
      );

      const totalCount = result.length;
      const totalPages = Math.ceil(totalCount / size);

      const hasNext = page < totalPages - 1 ? true : false;

      if (!result.length) {
        return new HttpResponse(
          JSON.stringify({
            content: null,
            pageSize: size,
            hasNext: false
          }),
          { status: 200 }
        );
      }
      return new HttpResponse(
        JSON.stringify({
          content: result.slice(page * 5, page * 5 + size),
          pageSize: size,
          hasNext
        }),
        { status: 200 }
      );
    }
  ),
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
