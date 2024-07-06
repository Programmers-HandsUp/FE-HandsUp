import { usePathname } from "next/navigation";
import { Children, ReactElement, ReactNode, useState } from "react";

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (steps: string[], defaultStep: string = steps[0]) => {
  const [step, setStep] = useState(defaultStep);

  const pathName = usePathname();

  const shallowRoute = (nextFunnel: string) => {
    history.replaceState(null, "", `${pathName}?step=${nextFunnel}`);
  };

  const setFunnel = (nextFunnel: string) => {
    shallowRoute(nextFunnel);
    setStep(nextFunnel);
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = Children.toArray(children).find(
      (childStep) => (childStep as ReactElement<StepProps>).props.name === step
    ) as ReactElement<StepProps> | undefined;

    return targetStep ? <>{targetStep.props.children}</> : null;
  };

  const Step = ({ children }: StepProps): ReactElement => {
    return <>{children}</>;
  };

  const FunnelComponent = Object.assign(
    function RouteFunnel(props: FunnelProps) {
      return <Funnel {...props} />;
    },
    { Step }
  );

  return [FunnelComponent, setFunnel] as const;
};
