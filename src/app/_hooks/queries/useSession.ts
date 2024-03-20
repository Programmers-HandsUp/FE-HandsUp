import { useQuery } from "@tanstack/react-query";

import { getLoginUserInfo } from "@/app/_api/user";
import { authCheck } from "@/utils/function/authCheck";

const useSession = () => {
  const isTokenValid = authCheck();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getLoginUserInfo,
    enabled: isTokenValid ? true : false
  });

  return { data, isLoading };
};

export default useSession;
