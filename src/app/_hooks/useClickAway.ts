"use client";

import { useEffect, useRef } from "react";

const events = ["mousedown", "touchstart"];

const useClickAway = <T extends HTMLElement>(handler: (e: Event) => void) => {
  const ref = useRef<T>(null);

  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: Event) => {
      if (e.target instanceof Node) {
        const targetNode = e.target;
        !element.contains(targetNode) && savedHandler.current(e);
      }
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }
    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
