import { http, HttpResponse } from "msw";

import { Auction } from "./types";
import { postListData } from "./data/postListData";

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
  http.get("/api/auctionpostlist", async () => {
    await delay(1000);
    return HttpResponse.json([
      {
        postId: 1,
        User: "sdasdadsa",
        content: "Z.com is so marvelous. I'm gonna buy that.",
        Images: "dgsdsgdgsgds",
        createdAt: "asffsasf"
      }
    ]);
  }),
  http.post("/api/createAuction", async ({ request }) => {
    try {
      const postData = (await request.json()) as any;
      if (isPostType(postListData)) {
        throw new Error("postType이 아님.");
      }

      return HttpResponse.json(postData.body);
    } catch (error) {
      throw new Error(`${error}`);
    }
  })
];

export default handlers;
