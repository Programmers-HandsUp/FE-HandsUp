import { useQuery } from "@tanstack/react-query";

import getChatRooms from "../_api/getChatRooms";

const useGetChatRooms = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chatRooms"],
    queryFn: () => getChatRooms()
  });

  return {
    data,
    isLoading,
    isError
  };
};
export default useGetChatRooms;
