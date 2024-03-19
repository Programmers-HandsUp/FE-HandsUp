export interface CreateCommentRequest {
  comment: string;
  auctionId: number;
}

export const createComment = async ({
  comment,
  auctionId
}: CreateCommentRequest) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/comment/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment,
        auctionId
      })
    }
  );

  return await res.json();
};
