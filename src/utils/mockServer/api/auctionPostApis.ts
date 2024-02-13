import { http, HttpResponse } from "msw";

import { PostType } from "./types";
import { postListData } from "./data/postListData";

function isPostType(data: any): data is PostType {
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
  http.get("/api/auctionpostlist", () => {
    return HttpResponse.json(postListData);
  }),
  http.post("/api/createauctionpost", async ({ request }) => {
    try {
      const postData = (await request.json()) as any;
      if (isPostType(postListData)) {
        throw new Error("postType이 아님.");
      }
      postListData.push(postData);
      return HttpResponse.json(postData.body);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
];

export default handlers;
