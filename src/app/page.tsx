"use client";

import React from "react";

import { fetchInterceptor } from "@/utils/function/fetchInterceptor";

export default function Home() {
  async function onClickFetch() {
    fetchInterceptor(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/chat-rooms/2`
    );
  }
  return (
    <main className="">
      <button onClick={onClickFetch}>버튼</button>
    </main>
  );
}
