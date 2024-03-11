import { useQuery } from "@tanstack/react-query";

import getPopularKeyword from "@/app/api/popularKeyword";

const useGetPopluarKeywrodrQuery = () => {
  return useQuery({
    queryKey: ["getPopularhKeyword"],
    queryFn: getPopularKeyword,
    select: (data) => {
      const response = data;
      return response;
    }
  });
};

export default useGetPopluarKeywrodrQuery;
