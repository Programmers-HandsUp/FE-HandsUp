"use client";

import { VariantProps } from "class-variance-authority";
import { ComponentProps, MouseEvent } from "react";

import { cn } from "@/utils/function/cn";

import Icon from "../Icon";
import { shadowSizeVariants } from "./ShadowSize.variants";

interface BookmarkProps
  extends VariantProps<typeof shadowSizeVariants>,
    ComponentProps<"button"> {
  initialState: boolean;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
}

const Bookmark = ({
  initialState = false,
  size = "medium",
  onClick
}: BookmarkProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className="outline-none">
      {initialState ? (
        <div className="relative">
          <Icon
            id="book-mark-fill"
            className="animate-beat"
            size={ICON_SIZE[size!]}
          />
          <span
            className={cn(shadowSizeVariants({ size }))}
            style={{
              boxShadow: `0 -${SHADOW_FIRST_SIZE[size]}px 0px #96e4ff, -${SHADOW_SECOND_SIZE[size]}px -${SHADOW_SECOND_SIZE[size]}px 0 #96e4ff, ${SHADOW_SECOND_SIZE[size]}px -${SHADOW_SECOND_SIZE[size]}px 0 #96e4ff`
            }}
          />
        </div>
      ) : (
        <Icon
          id="book-mark"
          size={ICON_SIZE[size!]}
        />
      )}
    </button>
  );
};

export default Bookmark;

const ICON_SIZE = {
  xsmall: 18,
  small: 22,
  medium: 26,
  large: 30,
  xlarge: 34
};
const SHADOW_FIRST_SIZE = {
  xsmall: 18,
  small: 22,
  medium: 30,
  large: 32,
  xlarge: 36
};

const SHADOW_SECOND_SIZE = {
  xsmall: 15,
  small: 18,
  medium: 24,
  large: 26,
  xlarge: 29
};
