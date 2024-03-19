"use client";
import FeedWriteTag from "@/app/_components/feed/write/FeedWriteTag";
import FeedWriteImg from "@/app/_components/feed/write/FeedWriteImg";
import FeedTagWrap from "@/app/_components/feed/write/FeedTagWrap";
import { useState } from "react";
import { postImgData } from "@/app/_utils/axios";

export default function Wrap() {
  const [tagInput, setTagInput] = useState(false);
  const [tag, setTag] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [text, setText] = useState("");

  const url = "http://localhost:8080/feed";

  const handleFeedData = async () => {
    console.log(images);
    try {
      const formData = new FormData();
      formData.append("content", text);
      formData.append("hashTag", tag.join("\\"));
      if (images !== null) {
        images.forEach((image) => {
          formData.append(`images`, image);
        });
      }

      await postImgData(url, formData);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      <FeedWriteImg images={images} setImages={setImages} />
      <textarea
        name="feedWrite"
        className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-b-[1px] outline-none"
        placeholder="내용을 입력해주세요."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <FeedTagWrap setTagInput={setTagInput} tag={tag} />
      <button
        onClick={() => handleFeedData()}
        className="absolute bottom-[70px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF]"
      >
        공유하기
      </button>

      {tagInput && (
        <FeedWriteTag tag={tag} setTag={setTag} setTagInput={setTagInput} />
      )}
    </section>
  );
}
