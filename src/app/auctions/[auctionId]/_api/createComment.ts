import { authCheck } from "@/utils/function/authCheck";

export interface CreateCommentRequest {
  content: string;
  auctionId: number;
}

export const createComment = async ({
  content,
  auctionId
}: CreateCommentRequest) => {
  const accessToken = authCheck();

  await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        content
      })
    }
  );
};
