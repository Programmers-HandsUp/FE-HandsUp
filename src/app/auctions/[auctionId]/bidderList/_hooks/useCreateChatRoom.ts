import { useMutation } from "@tanstack/react-query";

import createChatRoom from "../_api/createChatRoom";

const useCreateChatRoom = ({ auctionId }: { auctionId: number }) => {
  const createChatRoomMutation = useMutation({
    mutationFn: ({ biddingId }: { biddingId: number }) =>
      createChatRoom({ auctionId, biddingId })
  });

  return { mutation: createChatRoomMutation };
};
export default useCreateChatRoom;
