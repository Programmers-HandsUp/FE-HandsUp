import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/utils/function/cn";

import {
  CardDate,
  CardImage,
  CardPrice,
  CardTag,
  CardTitle
} from "./DefaultComponent";

interface ProductWrapperProps {
  id: number;
  className?: string;
  children: ReactNode;
}

const ProductCardWrapper = ({
  id,
  children,
  className
}: ProductWrapperProps) => {
  return (
    <Link
      href={`auctions/${id}`}
      className={cn("flex group", className)}
      shallow={true}>
      {children}
    </Link>
  );
};

const ProductCard = Object.assign(ProductCardWrapper, {
  CardImage,
  CardPrice,
  CardDate,
  CardTag,
  CardTitle
});

export default ProductCard;
