import { useQuery } from "@tanstack/react-query";

import { getCheckBookmarkList } from "@/app/_api/bookmark";
import { authCheck } from "@/utils/function/authCheck";

const useGetBookmarkList = () => {
  const isCheckValid = authCheck();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bookmarkList"],
    queryFn: () => getCheckBookmarkList,
    enabled: isCheckValid !== undefined
  });
  return { data, isLoading, isError };
};

export default useGetBookmarkList;
