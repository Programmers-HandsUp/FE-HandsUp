"use client";

import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

import Input from "../_component/common/Input";

const TestPage = () => {
  const buttons = async () => {
    const c = await fetchWithTokenRenewal(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/2`
    );
    console.log(c);
  };
  return (
    <div className="gap-4 mt-[30rem]">
      <Input
        variant={"box"}
        backgroundColor={"gray"}>
        <Input.InputForm />
        <Input.ClearButton />
      </Input>
      <Input
        variant={"underLine"}
        borderColor={"gray"}>
        <Input.InputForm />
        <Input.ClearButton />
      </Input>
      <Input variant={"none"}>
        <Input.InputForm />
        <Input.ClearButton />
      </Input>

      <button onClick={buttons}>asdfasdf</button>
    </div>
  );
};

export default TestPage;
