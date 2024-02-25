"use client";

import React from "react";
import ProgressBar from "./_component/common/ProgressBar";

export default function Home() {
  return (
    <main className="w-[10rem] h-[4rem]">
      <ProgressBar
        width={300}
        height={30}
        round={"full"}
        percent={50}
      />
    </main>
  );
}
