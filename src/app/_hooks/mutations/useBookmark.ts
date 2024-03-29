import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addBookmark,
  deleteBookmark,
  getCheckBookmarkResponse
} from "@/app/_api/bookmark";
import Toast from "@/app/_component/common/Toast";
import { AuctionDetailResponse } from "@/utils/types/auction/auctionDetail";

const useBookmark = ({
  remove,
  auctionId
}: {
  remove: boolean | undefined;
  auctionId: number;
}) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteBookmark : addBookmark;
  const toast = Toast();

  const BookmarkMutation = useMutation({
    mutationFn: () => fn(auctionId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["auction", auctionId, "bookmark"]
      });

      const previousData = queryClient.getQueryData<getCheckBookmarkResponse>([
        "auction",
        auctionId,
        "bookmark"
      ]);

      const previousAuctionData =
        queryClient.getQueryData<AuctionDetailResponse>(["auction", auctionId]);
      if (previousAuctionData && previousData) {
        const updateAuctionData = {
          ...previousAuctionData,
          bookmarkCount: !previousData.isBookmarked
            ? previousAuctionData.bookmarkCount + 1
            : previousAuctionData.bookmarkCount - 1
        };
        queryClient.setQueryData(["auction", auctionId], updateAuctionData);
        queryClient.setQueryData(["auction", auctionId, "bookmark"], {
          isBookmarked: !previousData.isBookmarked
        });
      }

      return { previousData };
    },
    onError: (err, newData, context) => {
      if (err.message === "401") {
        toast.show("로그인 후 이용해주세요.", "warn-solid", 2000);
      } else {
        toast.show("오류 발생", "warn-solid", 2000);
      }

      if (context) {
        queryClient.setQueryData(
          ["auction", auctionId, "bookmark"],
          context.previousData
        );
      }
    }
  });

  return BookmarkMutation;
};

export default useBookmark;
