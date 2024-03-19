import { useQuery } from "@tanstack/react-query";

import { getLoginUserInfo } from "@/app/_api/user";
import { authCheck } from "@/utils/function/authCheck";

const useSession = () => {
  const isTokenValid = authCheck();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getLoginUserInfo,
    enabled: !!isTokenValid
  });

  return { data };
};

export default useSession;
