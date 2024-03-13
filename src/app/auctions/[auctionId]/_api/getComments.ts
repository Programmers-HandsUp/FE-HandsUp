import { CommentListData } from "@/utils/types/comment/commentData";

export interface GetCommentsParams {
  auctionId: number;
  pageParam?: number;
}

//TODO: 추후 comment API가 나오면 수정
export const getComments = async ({
  auctionId,
  pageParam
}: GetCommentsParams): Promise<CommentListData> => {
  const res = await fetch(
    `http://localhost:9090/api/auctions/${auctionId}/comments?page=${pageParam}&size=10`
  );
  return await res.json();
};
