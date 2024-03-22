import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

export interface CreateCommentRequest {
  content: string;
  auctionId: number;
}

export const createComment = async ({
  content,
  auctionId
}: CreateCommentRequest) => {
  await fetchWithTokenRenewal(
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
};
