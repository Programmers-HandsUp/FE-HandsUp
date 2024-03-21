"use client";

import { CompatClient } from "@stomp/stompjs";
import { MutableRefObject } from "react";

interface SendMessageProps {
  stompClientRef: MutableRefObject<CompatClient | undefined>;
  chatRoomId: number;
}

interface MessageProps {
  content: string;
  senderId: number;
}

export const useSendMessage = ({
  stompClientRef,
  chatRoomId
}: SendMessageProps) => {
  const sendMessage = ({ content, senderId }: MessageProps) => {
    const destination = `/pub/chat-rooms/${chatRoomId}`;
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({
        destination,
        body: JSON.stringify({
          content,
          senderId
        })
      });
    } else {
      console.error("Stomp client is not connected.");
    }
  };

  return sendMessage;
};
