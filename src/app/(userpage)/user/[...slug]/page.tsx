"use client";

import { redirect } from "next/navigation";

import useSession from "@/app/_hooks/queries/useSession";
import Loading from "@/app/search/loading";

import AllReviews from "../../_components/AllReviews";
import TransactionList from "../../_components/TransactionList";
import Layout from "../_components/Layout";
import UserInfo from "../_components/UserInfo";

type Slug = "review" | "selling";

export type Title = "판매 내역" | "거래 후기 상세";

function UserPage({ params }: { params: { slug: [string, Slug] } }) {
  const id = +params.slug[0];
  const page = params.slug[1];

  const { data: user, isLoading } = useSession();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    redirect("/signin");
  }

  if (id === user.userId) {
    redirect("/my");
  }

  const titleMap: Record<Slug, Title> = {
    review: "거래 후기 상세",
    selling: "판매 내역"
  };

  const componentMap: Record<Slug, JSX.Element> = {
    review: <AllReviews userId={id} />,
    selling: (
      <TransactionList
        tradeMethod="판매"
        userId={id}
      />
    )
  };

  return page ? (
    <Layout
      id={id}
      title={titleMap[page]}>
      {componentMap[page]}
    </Layout>
  ) : (
    <UserInfo userId={id} />
  );
}

export default UserPage;
