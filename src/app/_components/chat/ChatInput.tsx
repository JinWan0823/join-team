"use client";

import React, { useState } from "react";
import { useSocket } from "../SocketProvider";

interface ChatInputProps {
  roomId: string;
  userId: string;
}

export default function ChatInfut({ roomId, userId }: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const socket = useSocket();

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(userId);
    e.preventDefault();
    if (text.trim() !== "") {
      const chatTime = new Date().toISOString();
      socket?.emit("message", {
        msg: text,
        room: roomId,
        user: userId,
        time: chatTime,
      });
      setText("");
    }
  };

  const InputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <>
      <div className="w-full p-[10px] absolute bottom-0 bg-[#777]">
        <form
          action="submit"
          onSubmit={sendMessage}
          className={`w-full bg-[#fff] p-[4px] flex flex-col items-end rounded-[10px] ${
            isFocused ? "border-2 border-blue-500" : "border-2 border-gray-300"
          }`}
        >
          <textarea
            className="w-full p-[10px] rounded-[10px] outline-none resize-none overflow-y-auto mb-[4px]"
            placeholder="메세지를 입력하세요."
            rows={3}
            style={{
              maxHeight: "6em",
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={text}
            onChange={InputText}
            onKeyPress={handleKeyPress}
          />
          <button
            type="submit"
            className="w-[60px] bg-blue-500 py-[6px] px-[4px] rounded-[10px] font-bold text-[#fff]"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
