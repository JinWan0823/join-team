"use client";

import ChatHeader from "@/app/_components/chat/ChatHeader";
import ChatInfut from "@/app/_components/chat/ChatInput";
import ChatTextWrap from "@/app/_components/chat/ChatTextWrap";
import { useSocket } from "@/app/_components/SocketProvider";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Wrap() {
  const socket = useSocket();
  const params = useParams();

  useEffect(() => {
    const roomId = params;
    if (socket) {
      socket.emit("joinRoom", roomId);
    }

    return () => {
      socket?.emit("leaveRoom", roomId);
    };
  }, [socket]);

  return (
    <section className="bg-[#777] max-h-[100vh] h-[100vh] relative">
      <ChatHeader />
      <ChatTextWrap />
      <ChatInfut />
    </section>
  );
}
