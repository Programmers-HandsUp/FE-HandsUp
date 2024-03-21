import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Toast from "@/app/_component/common/Toast";

import createChatRoom from "../_api/createChatRoom";

const useCreateChatRoom = ({ auctionId }: { auctionId: number }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toast = Toast();

  const createChatRoomMutation = useMutation({
    mutationFn: ({ biddingId }: { biddingId: number }) =>
      createChatRoom({ auctionId, biddingId }),
    onSuccess: (data) => {
      router.push(`/chatrooms/${data.chatRoomId}`);
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    },
    onError: (error) => {
      console.log(error);
      toast.show("에러가 발생했습니다.", "warn-solid", 2000);
    }
  });

  return { mutation: createChatRoomMutation };
};
export default useCreateChatRoom;
