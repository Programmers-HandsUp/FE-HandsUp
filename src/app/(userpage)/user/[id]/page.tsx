"use client";

import { redirect, useRouter } from "next/navigation";

import useSession from "@/app/_hooks/queries/useSession";
import Loading from "@/app/search/loading";

import UserInfo from "../_components/UserInfo";

function UserPage({ params }: { params: { id: string } }) {
  const id = +params.id;
  const { data: user, isLoading } = useSession();

  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    router.push("/signin");
    return null;
  }

  if (id === user.userId) {
    redirect("/my");
  }

  return <UserInfo userId={id} />;
}
export default UserPage;
