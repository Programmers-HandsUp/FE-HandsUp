import { useState } from "react";
import { ReactNode } from "react";

type FunnelType = ReactNode | null;

interface FunnelStateType {
  funnelLength: number;
  topComponent?: FunnelType;
  funnelArray: number[];
}

export default function useFunnel(
  startFunnel: number = 0,
  funnelDictionary: ReactNode[]
) {
  const [funnelState, setFunnelState] = useState<FunnelStateType>({
    funnelLength: 0,
    topComponent: null,
    funnelArray: []
  });

  const setFunnelArray = (newFunnelArray: number[] | null) => {
    if (newFunnelArray === null || newFunnelArray.length < 2) {
      setFunnelState({
        funnelLength: 1,
        topComponent: funnelDictionary[startFunnel],
        funnelArray: [startFunnel]
      });
    } else {
      setFunnelState({
        funnelLength: newFunnelArray.length,
        topComponent:
          funnelDictionary[newFunnelArray[newFunnelArray.length - 1]],
        funnelArray: [...newFunnelArray]
      });
    }
  };

  const pushFunnel = (funnelNum: number) => {
    setFunnelState(({ funnelArray, funnelLength }) => {
      const newArray = [...funnelArray, funnelNum];
      return {
        funnelLength: funnelLength + 1,
        topComponent: funnelDictionary[funnelNum],
        funnelArray: newArray
      };
    });
  };

  const popFunnel = () => {
    setFunnelState(({ funnelArray, funnelLength }) => {
      if (funnelLength === 0) {
        throw new Error("Funnel array가 비었음");
      }
      const newArray = [...funnelArray];
      newArray.pop();
      return {
        funnelLength: funnelLength - 1,
        topComponent: funnelDictionary[newArray[newArray.length - 1]] || null,
        funnelArray: newArray
      };
    });
  };

  return {
    funnelLength: funnelDictionary.length,
    nowFunnelPage: funnelState.funnelArray.length,
    topComponent: funnelState.topComponent,
    pushFunnel,
    popFunnel,
    setFunnelArray
  } as const;
}
