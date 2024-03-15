import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addBookmark, deleteBookmark } from "@/app/_api/bookmark";
import Toast from "@/app/_component/common/Toast";

const useBookmark = ({
  remove,
  auctionId
}: {
  remove: boolean;
  auctionId: number;
}) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteBookmark : addBookmark;
  const toast = Toast();

  const BookmarkMutation = useMutation({
    mutationFn: () => fn(auctionId),
    onMutate: async (newData) => {
      await queryClient.cancelQueries({
        queryKey: ["auction", auctionId, "bookmark"]
      });

      const previousTodos = queryClient.getQueryData([
        "auction",
        auctionId,
        "bookmark"
      ]);

      queryClient.setQueryData(["auction", auctionId, "bookmark"], () => [
        newData
      ]);

      return { previousTodos };
    },
    onSuccess: () => {},
    onError: (err, newData, context) => {
      console.log(err);
      toast.show("로그인 후 이용해주세요.", "warn-solid", 2000);
      if (context) {
        queryClient.setQueryData(
          ["auction", auctionId, "bookmark"],
          context.previousTodos
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bookmark"]
      });
    }
  });

  return BookmarkMutation;
};

export default useBookmark;
