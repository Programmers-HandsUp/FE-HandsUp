"use client";

if (process.env.NODE_ENV === "development") {
  import("@/utils/server");
}

export default function Home() {
  return <main className=""></main>;
}
