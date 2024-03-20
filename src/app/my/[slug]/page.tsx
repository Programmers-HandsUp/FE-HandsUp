"use client";

import { redirect } from "next/navigation";

import useSession from "@/app/_hooks/queries/useSession";
import Loading from "@/app/search/loading";

import AllReviews from "../_components/AllReviews";
import Layout from "../_components/Layout";
import ProfileEdit from "../_components/ProfileEdit";
import TransactionList from "../_components/TransactionList";

type Slug = "review" | "buying" | "selling" | "profile-edit";
export type Title =
  | "구매 내역"
  | "판매 내역"
  | "거래 후기 상세"
  | "프로필 편집";

function MyPage({ params }: { params: { slug: Slug } }) {
  const { slug } = params;

  const { data: user, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    redirect("/signin");
  }

  const { userId } = user;

  const titleMap: Record<Slug, Title> = {
    review: "거래 후기 상세",
    buying: "구매 내역",
    selling: "판매 내역",
    "profile-edit": "거래 후기 상세"
  };

  const componentMap: Record<Slug, JSX.Element> = {
    review: <AllReviews userId={userId} />,
    buying: (
      <TransactionList
        tradeMethod="구매"
        userId={userId}
      />
    ),
    selling: (
      <TransactionList
        tradeMethod="판매"
        userId={userId}
      />
    ),
    "profile-edit": <ProfileEdit />
  };

  return <Layout title={titleMap[slug]}>{componentMap[slug]}</Layout> || null;
}

export default MyPage;
