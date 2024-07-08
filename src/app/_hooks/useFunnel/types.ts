import { ReactElement, ReactNode } from "react";

export interface FunnelProps {
  step: string;
  children: Array<ReactElement<StepProps>>;
}

export interface StepProps {
  name: string;
  children: ReactNode;
}
