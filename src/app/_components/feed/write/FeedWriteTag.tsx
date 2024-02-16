"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

interface FeedProps {
  tag: string[];
  setTag: Dispatch<SetStateAction<string[]>>;
  setTagInput: Dispatch<SetStateAction<boolean>>;
}

export default function FeedWriteTag({ tag, setTagInput, setTag }: FeedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tagValue, setTagValue] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRemoveItem = (item: string) => {
    const updatedTagList = tag.filter((tag) => tag !== item);
    setTag(updatedTagList);
  };

  const handleTagList = (tagItem: string) => {
    if (tag.length > 10 || tagItem.length < 2 || tagItem.length > 9) return;
    const filteredArray = tag.filter((item: string) => item !== tagItem);
    filteredArray.unshift(tagItem);
    setTag(filteredArray);
    setTagValue("");
  };

  return (
    <div className="absolute left-0 bottom-0 bg-[#333333d6] z-50 w-full h-full flex items-end overflow-hidden">
      <div
        className={`absolute bottom-0 w-full bg-[#fff] rounded-t-lg pb-[100px] ${
          isVisible ? "select-visible" : "select-hidden"
        }`}
      >
        <div className="py-[10px] relative border-b-[1px] text-center">
          <p className="font-bold">태그입력</p>
          <button
            className="absolute top-[50%] translate-y-[-50%] right-[10px] text-xl"
            onClick={() => {
              setTagInput(false);
            }}
          >
            <IoIosClose />
          </button>
        </div>

        <div className="p-[10px] text-sm">
          <form
            className="flex p-[8px] text-[#878787] border-[1px] rounded-[10px]"
            onSubmit={(e) => {
              e.preventDefault();
              handleTagList(tagValue);
            }}
          >
            <span>#</span>
            <input
              type="text"
              placeholder="태그 입력"
              className="outline-none w-full"
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
            />
            <button className="shrink-0" type="submit">
              등록
            </button>
          </form>
          <p className="text-[#878787] m-[2px] text-sm">
            2~9글자 사이로 입력해주세요.
          </p>

          <div className="mt-[20px]">
            <p className="font-bold">
              등록한 태그{" "}
              <span className="text-[#878787]">{tag.length}/10</span>
            </p>
            <ul className="flex flex-wrap gap-3 mt-[10px]">
              {tag.map((item, idx) => (
                <li
                  key={idx}
                  className="underline text-[#003783] flex-center cursor-pointer"
                >
                  #{item}
                  <button onClick={() => handleRemoveItem(item)}>
                    <IoCloseCircleOutline />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
