import searchAddr from "@/app/api/address";
import { useQuery } from "@tanstack/react-query";

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
    enabled: !!addr
  });
};

export default useSearchAddrQuery;
