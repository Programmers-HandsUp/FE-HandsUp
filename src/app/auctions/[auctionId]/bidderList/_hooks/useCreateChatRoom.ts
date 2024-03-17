import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import createChatRoom from "../_api/createChatRoom";

const useCreateChatRoom = ({ auctionId }: { auctionId: number }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createChatRoomMutation = useMutation({
    mutationFn: ({ biddingId }: { biddingId: number }) =>
      createChatRoom({ auctionId, biddingId }),
    onSuccess: (data) => {
      router.push(`/chatrooms/${data.chatRoomId}`);
      queryClient.invalidateQueries({
        queryKey: ["auction", auctionId, "bids"]
      });
    }
  });

  return { mutation: createChatRoomMutation };
};
export default useCreateChatRoom;
