import { http, HttpResponse } from "msw";

import { commentData } from "./data/auctionPost/auctionComment";
import { auctionDetails } from "./data/auctionPost/auctionDetail";

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

      const result = auctionDetails.map(
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
  http.post("/api/comment/create", async () => {
    await delay(1000);
    return HttpResponse.text(JSON.stringify("ok"));
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/:auctionId`,
    async ({ request }) => {
      await delay(1000);

      const { searchParams } = new URL(request.url);
      const requestAuctionId = searchParams.get("auctionId");
      if (!requestAuctionId) {
        throw new Error("옥션 ID가 APi에 기입되어있지 않습니다.");
      }
      const newAuctionDetail = auctionDetails.filter(
        (detail) => detail.auctionId === parseInt(requestAuctionId)
      );
      if (!newAuctionDetail.length) {
        throw new Error("해당 경매 물품이 없습니다.");
      }
      return HttpResponse.json(newAuctionDetail[0]);
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/:auctionId`,
    async ({ request }) => {
      await delay(1000);

      const { searchParams } = new URL(request.url);
      const size = Number(searchParams.get("size"));
      const page = Number(searchParams.get("page"));
      const totalCount = commentData.length;
      const totalPages = Math.ceil(totalCount / size);

      const nextPage = page < totalPages - 1 ? true : false;

      return HttpResponse.json({
        content: commentData.slice(page * 10, page * 10 + size),
        size: commentData.slice(page * 10, page * 10 + size).length,
        hasNext: nextPage
      });
    }
  )
];

export default handlers;
