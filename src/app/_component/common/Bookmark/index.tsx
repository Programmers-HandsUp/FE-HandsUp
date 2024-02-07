"use client";

import { ComponentProps, MouseEvent } from "react";
import Icon from "../Icon";
import { cn } from "@/utils/cn";
import { shadowSizeVariants } from "./ShadowSize.varients";
import { VariantProps } from "class-variance-authority";

interface BookmarkProps
  extends VariantProps<typeof shadowSizeVariants>,
    ComponentProps<"button"> {
  initialState: boolean;
}

const Bookmark = ({
  initialState = false,
  size = "medium",
  onClick,
}: BookmarkProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };
  const iconSize = {
    xsmall: 6,
    small: 8,
    medium: 10,
    large: 12,
    xlarge: 14,
  };
  const shadowOneSize = {
    xsmall: 7,
    small: 8,
    medium: 12,
    large: 14,
    xlarge: 16,
  };

  const shadowTwoSize = {
    xsmall: 5,
    small: 6,
    medium: 9,
    large: 11,
    xlarge: 12,
  };

  return (
    <button onClick={handleClick} className="outline-none">
      {initialState ? (
        <div className="relative">
          <Icon
            id="book-mark-fill"
            className="animate-beat"
            size={iconSize[size!]}
          />
          <span
            className={cn(shadowSizeVariants({ size }))}
            style={{
              boxShadow: `0 -${shadowOneSize[size!]}px 0px #96e4ff, -${shadowTwoSize[size!]}px -${shadowTwoSize[size!]}px 0 #96e4ff, ${shadowTwoSize[size!]}px -${shadowTwoSize[size!]}px 0 #96e4ff`,
            }}
          />
        </div>
      ) : (
        <Icon id="book-mark" size={iconSize[size!]} />
      )}
    </button>
  );
};

export default Bookmark;
