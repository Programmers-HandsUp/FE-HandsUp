"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import Loading from "@/app/_component/common/Loading";
import useSession from "@/app/_hooks/queries/useSession";

import MyInfo from "./_components/MyInfo";

function MyPage() {
  const { data: user, isLoading } = useSession();
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    router.push("/signin");
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <MyInfo user={user} />
    </Suspense>
  );
}

export default MyPage;
