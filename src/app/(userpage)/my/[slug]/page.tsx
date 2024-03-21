"use client";

import { useRouter } from "next/navigation";

import Loading from "@/app/_component/common/Loading";
import useSession from "@/app/_hooks/queries/useSession";

import AllReviews from "../../_components/AllReviews";
import ProfileEdit from "../../_components/ProfileEdit";
import TransactionList from "../../_components/TransactionList";
import Layout from "../_components/Layout";

type Slug = "review" | "buying" | "selling" | "profile-edit";
export type Title =
  | "구매 내역"
  | "판매 내역"
  | "거래 후기 상세"
  | "프로필 편집";

function MyPage({ params }: { params: { slug: Slug } }) {
  const { slug } = params;

  const { data: user, isLoading } = useSession();
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    router.push("/signin");
    return null;
  }

  const { userId } = user;

  const titleMap: Record<Slug, Title> = {
    review: "거래 후기 상세",
    buying: "구매 내역",
    selling: "판매 내역",
    "profile-edit": "프로필 편집"
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
