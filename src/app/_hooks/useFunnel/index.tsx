"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Funnel from "./_component/Funnel";
import Step from "./_component/Step";
import { FunnelProps } from "./types";

export const useFunnel = (steps: string[], defaultStep: string = steps[0]) => {
  const [step, setStep] = useState(defaultStep);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const stepName = searchParams.get("step");

  useEffect(() => {
    if (!stepName || !steps.includes(stepName)) {
      setStep(defaultStep);
    } else {
      setStep(stepName);
    }
  }, [stepName, steps, defaultStep]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const newStep = params.get("step");
      if (newStep && steps.includes(newStep)) {
        setStep(newStep);
      } else {
        setStep(defaultStep);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [steps, defaultStep]);

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
    function RouteFunnel({ children }: Omit<FunnelProps, "step">) {
      return <Funnel step={step}>{children}</Funnel>;
    },
    { Step }
  );

  return [FunnelComponent, setFunnel, step] as const;
};
