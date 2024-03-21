"use client";

import { useRouter } from "next/navigation";

import AllReviews from "@/app/(userpage)/_components/AllReviews";
import TransactionList from "@/app/(userpage)/_components/TransactionList";

import Layout from "../../_components/Layout";

type Slug = "review" | "selling";

export type Title = "판매 내역" | "거래 후기 상세";

function UserPage({ params }: { params: { id: string; page: Slug } }) {
  const id = +params.id;
  const page = params.page;

  const router = useRouter();

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

  if (!(page in titleMap) || !(page in componentMap)) {
    router.push("/404");
    return null;
  }

  return (
    <Layout
      id={id}
      title={titleMap[page]}>
      {componentMap[page]}
    </Layout>
  );
}

export default UserPage;
