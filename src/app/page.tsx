"use client";

import tempImage from "../../public/assets/logoIcon.png";
import ProductCard from "./_component/common/ProductCard";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}

export default function Home() {
  return <main className=""></main>;
}
