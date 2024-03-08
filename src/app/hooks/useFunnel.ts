"use client";
import { ReactNode, useState } from "react";

type FunnelType = ReactNode | null;

interface FunnelStateType {
  nowFunnelNum: number;
  topComponent?: FunnelType;
}

export default function useFunnel(funnelList: ReactNode[]) {
  const [funnelState, setFunnelState] = useState<FunnelStateType>({
    nowFunnelNum: 0,
    topComponent: funnelList[0]
  });

  const setFunnelArray = (newFunnelArray: number[] | null) => {
    if (newFunnelArray === null || newFunnelArray.length < 2) {
      setFunnelState({
        nowFunnelNum: 0,
        topComponent: funnelList[0]
      });
    } else {
      setFunnelState({
        nowFunnelNum: 0,
        topComponent: funnelList[newFunnelArray[newFunnelArray.length - 1]]
      });
    }
  };

  const pushFunnel = () => {
    setFunnelState(({ nowFunnelNum }) => {
      return {
        nowFunnelNum: nowFunnelNum + 1,
        topComponent: funnelList[nowFunnelNum + 1]
      };
    });
  };

  const popFunnel = () => {
    setFunnelState(({ nowFunnelNum }) => {
      if (nowFunnelNum === 0) {
        throw new Error("Funnel array가 비었음");
      }
      return {
        nowFunnelNum: nowFunnelNum - 1,
        topComponent: funnelList[nowFunnelNum - 1]
      };
    });
  };

  return {
    funnelLength: funnelList.length,
    topFunnelPage: funnelState.nowFunnelNum,
    topComponent: funnelState.topComponent,
    pushFunnel,
    popFunnel,
    setFunnelArray
  } as const;
}
