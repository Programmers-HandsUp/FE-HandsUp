import React from "react";
import Input from "./_component/common/Input";

export default function Home() {
  return (
    <main className="">
      <Input>
        <Input.Label>라벨</Input.Label>
        <Input.InputBox>
          <Input.InputArea className="w-24" />
        </Input.InputBox>
      </Input>
    </main>
  );
}
