"use client";

import React from "react";

import ReliabilityBar from "./_component/common/Reliabilitybar";
import Toast from "./_component/common/Toast";

export default function Home() {
  const toast = Toast();
  return (
    <main className="">
      <ReliabilityBar score={140} />
    </main>
  );
}
