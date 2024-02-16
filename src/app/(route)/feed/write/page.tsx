"use client";
import FeedWriteTag from "@/app/_components/feed/write/FeedWriteTag";
import FeedWriteImg from "@/app/_components/feed/write/FeedWriteImg";
import FeedTagWrap from "@/app/_components/feed/write/FeedTagWrap";
import { useState } from "react";

export default function Wrap() {
  const [tagInput, setTagInput] = useState(false);
  const [tag, setTag] = useState<string[]>([]);
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      <FeedWriteImg />
      <textarea
        name="feedWrite"
        className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-b-[1px] outline-none"
        placeholder="내용을 입력해주세요."
      ></textarea>
      <FeedTagWrap setTagInput={setTagInput} tag={tag} />
      <button className="absolute bottom-[70px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF]">
        공유하기
      </button>

      {tagInput && (
        <FeedWriteTag tag={tag} setTag={setTag} setTagInput={setTagInput} />
      )}
    </section>
  );
}
