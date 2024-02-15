"use client";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}

export default function Home() {
  return <main className=""></main>;
}
