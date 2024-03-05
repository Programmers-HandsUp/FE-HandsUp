export interface IGetComments {
  auctionId: number;
  pageParam?: number;
}

export const getComments = async ({ auctionId, pageParam }: IGetComments) => {
  const res = await fetch(
    `http://localhost:9090/api/${auctionId}/commentList?page=${pageParam}&size=10`
  );
  return await res.json();
};
