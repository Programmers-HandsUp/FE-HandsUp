import { ICommentListAPI } from "../products/[auctionId]/_hooks/queries/useGetCommentList";

export interface IGetComments {
  auctionId: number;
  pageParam?: number;
}

export const getComments = async ({
  auctionId,
  pageParam
}: IGetComments): Promise<ICommentListAPI> => {
  const res = await fetch(
    `http://localhost:9090/api/auctions/${auctionId}/comments?page=${pageParam}&size=10`
  );
  return await res.json();
};
