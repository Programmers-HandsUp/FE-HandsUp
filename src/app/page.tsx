"use client";

import Input from "./_component/common/Input";
import { useEffect } from "react";

if (process.env.NODE_ENV === "development") {
  import("@/utils/server");
}

export default function Home() {
  const temp = () => {
    const getMembers = async () => {
      const req = await fetch("/members");
      console.log(req);
    };
    getMembers();
  };

  return (
    <main className="">
      <button onClick={temp}>o</button>
      <Input>
        <Input.Label>라벨</Input.Label>
        <Input.InputBox>
          <Input.Label>라벨</Input.Label>
          <Input.InputArea className="w-24" />
        </Input.InputBox>
      </Input>
    </main>
  );
}
