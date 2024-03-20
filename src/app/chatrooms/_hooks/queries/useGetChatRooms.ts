import { useSuspenseQuery } from "@tanstack/react-query";

import getChatRooms from "../../_api/getChatRooms";

const useGetChatRooms = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["chatRooms"],
    queryFn: getChatRooms
  });

  return {
    data
  };
};
export default useGetChatRooms;
