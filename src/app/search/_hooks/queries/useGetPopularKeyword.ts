import { useQuery } from "@tanstack/react-query";

import getPopularKeyword from "../../_api/getPopularKeyword";

const useGetPopularKeywordQuery = () => {
  return useQuery({
    queryKey: ["getPopularKeyword"],
    queryFn: getPopularKeyword,
    select: (data) => {
      const response = data;
      return response;
    }
  });
};

export default useGetPopularKeywordQuery;
