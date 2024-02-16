import React from "react";
import Input from "./_component/common/Input";

export default function Home() {
  return (
    <main className="">
      <Input>
        <Input.Label>라벨</Input.Label>
        <Input.InputInnerBox>
          <Input.Label>라벨</Input.Label>
          <Input.InputForm className="w-24" />
          <Input.Label>원</Input.Label>
        </Input.InputInnerBox>
        <Input.SubmitButton onClick={()=>(console.log(""))}
      </Input>
    </main>
  );
}
