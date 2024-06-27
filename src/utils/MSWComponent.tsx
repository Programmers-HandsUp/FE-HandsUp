"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        const init = async () => {
          const { worker } = await import("@/utils/mocks/browser");
          worker.start();
        };
        init();
      }
    }
  }, []);

  return null;
};
