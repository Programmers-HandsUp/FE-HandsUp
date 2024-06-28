import { http, HttpResponse } from "msw";

import { popularSearchData } from "./data/popularSearchData";
import { postListData } from "./data/postListData";

const handler = [
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/search/popular`,
    async () => {
      try {
        return new HttpResponse(JSON.stringify(popularSearchData), {
          status: 200
        });
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
  ),
  http.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/search`,
    async ({ request }) => {
      const { searchParams } = new URL(request.url);
      const size = Number(searchParams.get("size") || 5);
      const page = Number(searchParams.get("page") || 0);

      interface RequestBody {
        keyword: string;
      }

      let body: RequestBody;
      try {
        body = (await request.json()) as RequestBody;
      } catch (error) {
        body = { keyword: "" };
      }
      const { keyword } = body;

      const result = postListData.map(
        ({
          auctionId,
          title,
          currentBiddingPrice,
          imageUrl,
          bookmarkCount,
          dong,
          createdAt
        }) => {
          if (title.includes(keyword)) {
            return {
              auctionId,
              title,
              currentBiddingPrice,
              imageUrl,
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
  )
];

export default handler;
