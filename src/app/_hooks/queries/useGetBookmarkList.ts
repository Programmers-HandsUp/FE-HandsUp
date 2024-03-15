import { useQuery } from "@tanstack/react-query";

import { getCheckBookmarkList } from "@/app/_api/bookmark";

const useGetBookmarkList = () => {
  const { data } = useQuery({
    queryKey: ["bookmarkList"],
    queryFn: () => getCheckBookmarkList
  });
  return { data };
};

export default useGetBookmarkList;
