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

  const temp2 = () => {
    const postMockData = {
      id: "123",
      authorID: "1234",
      authorName: "jjg",
      postName: "좋은거",
      startPrice: 3000,
      nowPrice: 4000,
      endtime: "1234",
      tradePlace: "요기서",
      postDetail: "내용",
    };
    const getMembers = async () => {
      const req = await fetch("/setmembers", {
        method: "POST",
        headers: {   
          "content-type": "application/json",
        },
        body: JSON.stringify(postMockData),
      });
      console.log(req);
    };
    getMembers();
  };
  return (
    <main className="">
      <button onClick={temp}>o</button>
      <button onClick={temp2}>o</button>
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
