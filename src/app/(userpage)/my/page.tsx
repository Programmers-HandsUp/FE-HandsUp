"use client";

import { redirect } from "next/navigation";
import { Suspense } from "react";

import Loading from "../../_component/common/Loading";
import useSession from "../../_hooks/queries/useSession";
import MyInfo from "./_components/MyInfo";

function MyPage() {
  const { data: user, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    redirect("/signin");
  }

  return (
    <Suspense fallback={<Loading />}>
      <MyInfo user={user} />
    </Suspense>
  );
}

export default MyPage;
