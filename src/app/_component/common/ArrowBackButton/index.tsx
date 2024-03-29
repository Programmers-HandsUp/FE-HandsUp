"use client";

import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

import Icon from "../Icon";

interface ArrowBackButton extends ComponentProps<"button"> {}

const ArrowBackButton = ({ className = "" }: ArrowBackButton) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={className}>
      <Icon id="arrow-back" />
    </button>
  );
};

export default ArrowBackButton;
