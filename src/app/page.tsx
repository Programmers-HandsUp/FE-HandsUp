"use client";

import React from "react";
import Input from "./_component/common/Input";
import { useState } from "react";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}

export default function Home() {
  const [a, setA] = useState("a");

  return (
    <main className="">
      <Input className="gap-2 my-1">
        <label> 가격</label>
        <Input.InputInnerBox className="bg-slate-100 gap-2">
          <label> 약</label>
          <Input.InputForm size="md" verticalAlign={"right"} />
          <label> 원</label>
        </Input.InputInnerBox>
        <Input.SubmitButton />
      </Input>

      <Input className="gap-2 my-1">
        <label> 과자</label>
        <Input.InputInnerBox className="bg-slate-100 gap-2">
          <Input.InputForm size="sm" verticalAlign="right" maxLength={3} />
          <label> 개</label>
        </Input.InputInnerBox>
        <Input.SubmitButton color="red" />
      </Input>

      <Input className="gap-2 my-1">
        <Input.InputInnerBox className="bg-slate-100 gap-2">
          <label>앞</label>
          <Input.InputForm size="lg" verticalAlign="right" maxLength={2} />
        </Input.InputInnerBox>
        <Input.SubmitButton color="lightYellow" />
      </Input>
      <Input className="gap-2 my-1">
        <Input.InputInnerBox className="bg-slate-100 gap-2">
          <label>앞</label>
          <Input.InputForm size="lg" verticalAlign="center" maxLength={2} />
          <label>뒤</label>
        </Input.InputInnerBox>
      </Input>
    </main>
  );
}
