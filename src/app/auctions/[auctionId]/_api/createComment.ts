import { authCheck } from "@/utils/function/authCheck";
import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { CommentContent } from "@/utils/types/comment/commentData";

export interface CreateCommentRequest {
  content: string;
  auctionId: number;
}

export const createComment = async ({
  content,
  auctionId
}: CreateCommentRequest): Promise<CommentContent> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) throw new Error("401");

  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content
      })
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [CreateComment] ");

  return res.json();
};
