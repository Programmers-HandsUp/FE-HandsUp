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
}

const Bookmark = ({
  initialState = false,
  size = "xlarge",
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
              boxShadow: `0 -${SHADOW_FIRST_SIZE[size!]}px 0px #96e4ff, -${SHADOW_SECOND_SIZE[size!]}px -${SHADOW_SECOND_SIZE[size!]}px 0 #96e4ff, ${SHADOW_SECOND_SIZE[size!]}px -${SHADOW_SECOND_SIZE[size!]}px 0 #96e4ff`
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
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 14
};
const SHADOW_FIRST_SIZE = {
  xsmall: 7,
  small: 8,
  medium: 12,
  large: 14,
  xlarge: 16
};

const SHADOW_SECOND_SIZE = {
  xsmall: 5,
  small: 6,
  medium: 9,
  large: 11,
  xlarge: 12
};
