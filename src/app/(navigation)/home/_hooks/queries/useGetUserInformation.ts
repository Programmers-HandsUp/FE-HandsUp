import { useQuery } from "@tanstack/react-query";

import { getLoginUserInfo } from "@/app/_api/user";

const useUserInformation = () => {
  return useQuery({
    queryKey: ["userInformation"],
    queryFn: getLoginUserInfo
  });
};

export default useUserInformation;
