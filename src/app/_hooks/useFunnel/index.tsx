"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import Funnel from "./_component/Funnel";
import Step from "./_component/Step";
import { FunnelProps } from "./types";

export const useFunnel = (steps: string[], defaultStep: string = steps[0]) => {
  const [step, setStep] = useState(defaultStep);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const stepName = searchParams.get("step");

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (!stepName || !steps.includes(stepName)) {
        router.replace(`${pathName}?step=${defaultStep}`);
      } else {
        setStep(stepName);
        router.replace(`${pathName}?step=${stepName}`);
      }
    }
  }, []);

  const shallowRoute = (nextFunnel: string) => {
    if (pathName) {
      window.history.pushState(null, "", `${pathName}?step=${nextFunnel}`);
    }
  };

  const setFunnel = (nextFunnel: string) => {
    shallowRoute(nextFunnel);
    setStep(nextFunnel);
  };

  const FunnelComponent = Object.assign(
    function RouteFunnel({ children }: FunnelProps) {
      return <Funnel step={step}>{children}</Funnel>;
    },
    { Step }
  );

  return [FunnelComponent, setFunnel] as const;
};
