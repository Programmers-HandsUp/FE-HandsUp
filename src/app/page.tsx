"use client";
import { useState } from "react";

import { setCookie } from "@/utils/function/cookie";
import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

export default function Home() {
  const [c, setC] = useState("4");
  const onClick = async () => {
    const d = await fetchWithTokenRenewal(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/chat-rooms/2`
    );
    setC(d.ok ? "1" : "2");
  };
  return (
    <main className="">
      <p className="text-white">{c}</p>
      <button onClick={() => onClick()}>ㅌ</button>
      <button
        onClick={() => setCookie({ name: "accessToken", value: "assdsdddf" })}>
        ㅌ
      </button>
    </main>
  );
}
