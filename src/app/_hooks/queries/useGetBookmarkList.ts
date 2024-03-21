import { useQuery } from "@tanstack/react-query";

import { getCheckBookmarkList } from "@/app/_api/bookmark";
import { authCheck } from "@/utils/function/authCheck";

const useGetBookmarkList = () => {
  const isCheckValid = authCheck();

  const { data } = useQuery({
    queryKey: ["bookmarkList"],
    queryFn: () => getCheckBookmarkList,
    enabled: isCheckValid !== undefined
  });
  return { data };
};

export default useGetBookmarkList;
