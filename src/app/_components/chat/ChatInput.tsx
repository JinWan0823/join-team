"use client";

import { useState } from "react";

export default function ChatInfut() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="w-full p-[10px] absolute bottom-0">
        <div
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
          />
          <button className="w-[60px] bg-blue-500 py-[6px] px-[4px] rounded-[10px] font-bold text-[#fff]">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
