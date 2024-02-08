import { useRef, useState, useEffect, useCallback } from "react";

export type EventType = "focus" | "hover" | "click";

interface InteractionEvent {
  startEvent: "mouseover" | "focusin" | "click";
  endEvent: "mouseout" | "focusout" | "mouseleave";
}

const INTERACTION_EVENTS: Record<EventType, InteractionEvent> = {
  hover: {
    startEvent: "mouseover",
    endEvent: "mouseout"
  },
  focus: {
    startEvent: "focusin",
    endEvent: "focusout"
  },
  click: {
    startEvent: "click",
    endEvent: "mouseleave"
  }
};

const useInteraction = (eventType: EventType) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInteracted, setIsInteracted] = useState(false);

  const handleEvent = useCallback(() => setIsInteracted(true), []);
  const removeEvent = useCallback(() => setIsInteracted(false), []);

  const currentInteraction = INTERACTION_EVENTS[eventType];

  useEffect(() => {
    const element = ref.current;

    if (!element || !currentInteraction) return;

    const { startEvent, endEvent } = currentInteraction;

    element.addEventListener(startEvent, handleEvent);
    element.addEventListener(endEvent, removeEvent);

    return () => {
      element.removeEventListener(startEvent, handleEvent);
      element.removeEventListener(endEvent, removeEvent);
    };
  }, [ref, eventType, handleEvent, removeEvent, currentInteraction]);

  return { ref, isInteracted };
};

export default useInteraction;
