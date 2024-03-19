"use client";

import { CompatClient } from "@stomp/stompjs";
import { MutableRefObject } from "react";

interface SendMessageProps {
  stompClientRef: MutableRefObject<CompatClient | undefined>;
  chatId: number;
}

interface MessageProps {
  content: string;
  senderId: number;
}

export const useSendMessage = ({
  stompClientRef,
  chatId
}: SendMessageProps) => {
  const sendMessage = ({ content, senderId }: MessageProps) => {
    const destination = `/pub/chat-rooms/${chatId}`;
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({
        destination,
        body: JSON.stringify({
          content,
          senderId
        })
      });
    } else {
      console.log("Stomp client is not connected.");
    }
  };

  return sendMessage;
};
