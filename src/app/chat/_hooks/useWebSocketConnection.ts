"use client";

import { CompatClient, Stomp } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

interface Message {
  chatRoomId: number;
  senderId: number;
  content: string;
  createdAt: Date;
}

const useWebSocketConnection = ({ chatId }: { chatId: number }) => {
  const stompClientRef = useRef<CompatClient>();
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_BASE_URL}/ws`);
    const stompClient = Stomp.over(socket);
    stompClientRef.current = stompClient;

    stompClient.connect(
      {},
      () => {
        const destination = `/sub/chat-rooms/${chatId}`;
        stompClient.subscribe(destination, (message) => {
          const newMessage = JSON.parse(message.body);
          setMessageList((currentList) => [...currentList, newMessage]);

          console.log("Received message:", newMessage);
        });
      },
      (error: unknown) => {
        console.log("Connection error:", error);
      }
    );

    return () => {
      if (stompClient) {
        stompClient.disconnect(() => {
          console.log("Disconnected");
        });
      }
    };
  }, [chatId]);

  return { messageList, stompClientRef };
};

export default useWebSocketConnection;
