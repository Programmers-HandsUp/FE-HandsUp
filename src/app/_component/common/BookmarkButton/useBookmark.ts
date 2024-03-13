import { useMutation, useQueryClient } from "@tanstack/react-query";

import Toast from "../Toast";
import { addBookmark, deleteBookmark } from "./_api";

const useBookmark = ({
  remove,
  auctionId,
  authUserId,
  postUserId
}: {
  remove: boolean;
  auctionId: number;
  authUserId: number;
  postUserId: number;
}) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteBookmark : addBookmark;
  const toast = Toast();

  const BookmarkMutation = useMutation({
    mutationFn: (auctionId: number) => fn(auctionId),
    onSuccess: () => {
      if (remove || authUserId === postUserId) return;
    },
    onError: () => {
      toast.show("로그인 후 이용해주세요.", "warn-solid", 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId]
      });
    }
  });

  return BookmarkMutation;
};

export default useBookmark;
