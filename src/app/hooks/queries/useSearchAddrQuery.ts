import { useQuery } from "@tanstack/react-query";

import searchAddr from "@/app/api/address";

const useSearchAddrQuery = (addr: string) => {
  return useQuery({
    queryKey: ["searchAddr", addr],
    queryFn: () => searchAddr(addr),
    select: (data) => {
      const response = data.documents
        .filter((addr) => addr.address.region_3depth_h_name !== "")
        .map((addr) => ({
          address: addr.address_name
        }));
      return response;
    },
    enabled: !!addr && addr.length > 1,
    staleTime: Infinity
  });
};

export default useSearchAddrQuery;
