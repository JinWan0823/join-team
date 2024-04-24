"use client";
import FeedWriteTag from "@/app/_components/feed/write/FeedWriteTag";
import FeedWriteImg from "@/app/_components/feed/write/FeedWriteImg";
import FeedTagWrap from "@/app/_components/feed/write/FeedTagWrap";
import { useEffect, useState } from "react";
import { getData, putImgData } from "@/app/_utils/axios";
import { FeedData } from "@/app/_utils/Interface";
import { useParams, useRouter } from "next/navigation";

export default function Wrap() {
  const [tagInput, setTagInput] = useState(false);
  const [tag, setTag] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [showImages, setShowImages] = useState<string[]>([]);

  const params = useParams();
  const router = useRouter();
  const url = `http://localhost:8080/feed/${params.id}`;

  const handleUpdateData = async () => {
    try {
      const formData = new FormData();
      formData.append("content", text);
      formData.append("hashTag", tag.join("\\"));
      const updatedImages = images.filter((image) => image.size > 0);
      updatedImages.forEach((image) => {
        formData.append(`images`, image);
      });
      await putImgData(url, formData);

      router.push("/myfeed");
    } catch (error) {
      console.log("Data Update Error : ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<FeedData>(url);

        if (result.images.length > 0) {
          setImages(result.images.map(() => new File([], "")));
        }
        setText(result.content);
        setTag(result.hashTag.split("\\"));
        setShowImages(result.images);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);

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
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <FeedTagWrap setTagInput={setTagInput} tag={tag} />
      <button
        onClick={() => handleUpdateData()}
        className="absolute bottom-[70px] left-[50%] translate-x-[-50%] w-[calc(100%-10px)] text-[#fff] py-[10px] mt-[10px] rounded-[8px] bg-[#3D97FF]"
      >
        수정하기
      </button>

      {tagInput && (
        <FeedWriteTag tag={tag} setTag={setTag} setTagInput={setTagInput} />
      )}
    </section>
  );
}
