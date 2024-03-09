import getPopularKeyword from "@/app/api/\bpopularKeyword";
import { useQuery } from "@tanstack/react-query";

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
