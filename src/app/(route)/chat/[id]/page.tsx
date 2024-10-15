"use client";

import ChatHeader from "@/app/_components/chat/ChatHeader";
import ChatInfut from "@/app/_components/chat/ChatInput";
import ChatTextWrap from "@/app/_components/chat/ChatTextWrap";
import { useSocket } from "@/app/_components/SocketProvider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrap() {
  const socket = useSocket();
  const params = useParams();

  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", params.id);
    }

    return () => {
      socket?.emit("leaveRoom", params.id);
    };
  }, []);

  useEffect(() => {
    socket?.on("broadcast", (data) => {
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    const user = localStorage.getItem("recoil-persist");
    if (user) {
      const userIdData = JSON.parse(user);
      setUserId(userIdData.userInfo.id);
    }
  }, []);

  return (
    <section className="bg-[#777] max-h-[100vh] h-[100vh] relative">
      <ChatHeader />
      <ChatTextWrap roomId={params.id.toString()} userId={userId} />
      <ChatInfut roomId={params.id.toString()} userId={userId} />
    </section>
  );
}
