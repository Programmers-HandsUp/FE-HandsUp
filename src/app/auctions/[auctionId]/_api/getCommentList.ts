import { CommentListResponse } from "@/utils/types/comment/commentData";

export const getCommentList = async ({
  auctionId,
  pageParam
}: {
  auctionId: number;
  pageParam: number;
}): Promise<CommentListResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/comments?page=${pageParam}&size=10`,
    {
      next: {
        tags: ["comment", auctionId.toString()]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [Comment] ");

  return res.json();
};
