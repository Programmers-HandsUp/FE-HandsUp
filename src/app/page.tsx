"use client";

import React from "react";
import Input from "./_component/common/Input";
import { useState } from "react";

export default function Home() {
  const [a, setA] = useState("a");

  return (
    <main className="">
      <Input className="gap-2">
        <Input.Label className="mx-1">라벨</Input.Label>
        <Input.InputInnerBox className="gap-2">
          <label> 얼마</label>
          <Input.InputForm onChange={() => setA(a)} className="w-24" />
          <label> 원</label>
        </Input.InputInnerBox>
        <Input.SubmitButton />
      </Input>
    </main>
  );
}
