import { Children, ReactElement } from "react";

import { FunnelProps, StepProps } from "../types";

const Funnel = ({ step, children }: FunnelProps) => {
  const targetStep = Children.toArray(children).find(
    (childStep) => (childStep as ReactElement<StepProps>).props.name === step
  ) as ReactElement<StepProps> | undefined;

  return targetStep ? <>{targetStep.props.children}</> : null;
};
export default Funnel;
