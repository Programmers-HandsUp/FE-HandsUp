import { useSuspenseQuery } from "@tanstack/react-query";

import { getLoginUserInfo } from "@/app/_api/user";

const useUserInformation = () => {
  return useSuspenseQuery({
    queryKey: ["userInformation"],
    queryFn: getLoginUserInfo
  });
};

export default useUserInformation;
