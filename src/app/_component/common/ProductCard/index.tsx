import { cn } from "@/utils/cn";
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
  children: ReactNode;
}

const ProductCardWrapper = ({ id, children }: ProductWrapperProps) => {
  return (
    <Link
      href={`auction/${id}`}
      className={cn("flex group")}>
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
