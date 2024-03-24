import { QueryClient } from "@tanstack/react-query";

import { CheckLoginUserResponse } from "@/utils/types/user/users";

import { getLoginUserInfo } from "../_api/user";
import Navigation from "../_component/common/Navigation";
import BookmarkPageHeader from "./_component/header";

export default async function UserPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: getLoginUserInfo
  });

  const user = queryClient.getQueryData<CheckLoginUserResponse>(["user"]);

  return (
    <section>
      <div className="w-[95%] mx-auto">
        <BookmarkPageHeader />
        {children}
      </div>
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation user={user} />
      </nav>
    </section>
  );
}
