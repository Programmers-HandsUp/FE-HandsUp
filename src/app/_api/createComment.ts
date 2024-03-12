export interface ICreateComment {
  comment: string;
  auctionId: number;
}

export const createComment = async ({ comment, auctionId }: ICreateComment) => {
  const res = await fetch("http://localhost:9090/api/comment/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      comment,
      auctionId
    })
  });

  return await res.json();
};
