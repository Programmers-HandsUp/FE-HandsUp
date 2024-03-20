"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

export default function Home() {
  const router = useRouter();

  async function onClickFetch() {
    fetchWithTokenRenewal({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/chat-rooms/2`,
      router: router
    });
  }
  return (
    <main className="">
      <button onClick={onClickFetch}>버튼</button>
    </main>
  );
}
