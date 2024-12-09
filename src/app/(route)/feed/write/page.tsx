"use client";
import FeedWriteTag from "@/app/_components/feed/write/FeedWriteTag";
import FeedWriteImg from "@/app/_components/feed/write/FeedWriteImg";
import FeedTagWrap from "@/app/_components/feed/write/FeedTagWrap";
import { useState } from "react";
import { postImgData } from "@/app/_utils/axios";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/navigation";
import { joinTeamUrl } from "@/app/_utils/url";

export default function Wrap() {
  const [tagInput, setTagInput] = useState(false);
  const [tag, setTag] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [showImages, setShowImages] = useState<string[]>([]);
  const [text, setText] = useState("");

  const router = useRouter();
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 520,
  };

  const handleFeedData = async () => {
    try {
      const formData = new FormData();
      formData.append("content", text);
      formData.append("hashTag", tag.join("\\"));
      if (images !== null) {
        for (const image of images) {
          const compressionFile = await imageCompression(image, options);
          formData.append(`images`, compressionFile);
        }
      }
      await postImgData(`${joinTeamUrl}/feed`, formData);
      router.push("/myfeed");
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track">
      <FeedWriteImg
        images={images}
        setImages={setImages}
        showImages={showImages}
        setShowImages={setShowImages}
      />
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
