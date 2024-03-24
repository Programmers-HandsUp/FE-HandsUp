import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { ChatContentResponse } from "@/utils/types/chat/chatRooms";

import getChatContent from "../_api/getChatContent";

const useGetChatData = ({ chatRoomId }: { chatRoomId: number }) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetched
  } = useInfiniteQuery<
    ChatContentResponse,
    DefaultError,
    InfiniteData<ChatContentResponse>,
    [string, number],
    number
  >({
    queryKey: ["chat", chatRoomId],
    queryFn: ({ pageParam = 0 }) => getChatContent({ pageParam, chatRoomId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.hasNext) return undefined;
      return lastPageParam + 1;
    }
    // enabled: !!(session?.user?.email && id),
  });

  return {
    data: data?.pages.flatMap((x) => x.content) || [],
    isFetched,
    hasNextPage,
    isLoading,
    isFetching,
    isRefetching,
    fetchNextPage
  };
};

export default useGetChatData;
