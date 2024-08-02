import { http, HttpResponse } from "msw";

import { bidMockData } from "../mockData/auctionPost/auctionBidRecord";
import { auctionDetails } from "../mockData/auctionPost/auctionDetail";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend`,
    async ({ request }) => {
      const { searchParams } = new URL(request.url);
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
        }) => ({
          auctionId,
          title,
          currentBiddingPrice,
          endDate,
          imgUrl: imageUrls[0],
          bookmarkCount,
          dong,
          createdAt
        })
      );

      const totalCount = result.length;
      const totalPages = Math.ceil(totalCount / size);
      const hasNext = page < totalPages - 1;

      return new HttpResponse(
        JSON.stringify({
          content: result.slice(page * size, page * size + size),
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
    async ({ params }) => {
      await delay(1000);

      const requestAuctionId = Number(params.auctionId);

      const newAuctionDetail = auctionDetails.find(
        (detail) => detail.auctionId === requestAuctionId
      );

      if (!newAuctionDetail) {
        return new HttpResponse(
          JSON.stringify({ error: "해당 경매 물품이 없습니다." }),
          { status: 404 }
        );
      }

      return HttpResponse.json(newAuctionDetail);
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/:auctionId/bids/top3`,
    async ({ params }) => {
      await delay(1000);

      const requestAuctionId = Number(params.auctionId);

      const requestAuctionTop3Bids = bidMockData
        .filter((bidRecord) => bidRecord.auctionId === requestAuctionId)
        .sort((a, b) => b.biddingPrice - a.biddingPrice)
        .slice(0, 3);

      return HttpResponse.json({
        content: requestAuctionTop3Bids,
        size: requestAuctionTop3Bids.length,
        hasNext: false
      });
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/:auctionId/bids`,
    async ({ params }) => {
      await delay(1000);

      const requestAuctionId = Number(params.auctionId);

      const requestAuctionTop3Bids = bidMockData
        .filter((bidRecord) => bidRecord.auctionId === requestAuctionId)
        .sort((a, b) => b.biddingPrice - a.biddingPrice);

      return HttpResponse.json({
        content: requestAuctionTop3Bids,
        size: requestAuctionTop3Bids.length,
        hasNext: false
      });
    }
  )
];

export default handlers;
