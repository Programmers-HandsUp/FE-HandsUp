import { cn } from "@/utils/function/cn";
import {
  CardImage,
  CardPrice,
  CardDate,
  CardTag,
  CardTitle
} from "./DefaultComponent";
import Link from "next/link";

import { ReactNode } from "react";

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
      href={`auction/${id}`}
      className={cn("flex group", className)}>
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
