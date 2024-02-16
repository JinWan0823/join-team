"use client";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function FeedWriteTag() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectMenu, setSelectMenu] = useState(true);
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
            onClick={(e) => {
              e.preventDefault();
              setSelectMenu(false);
            }}
          >
            <IoIosClose />
          </button>
        </div>

        <div className="p-[10px] text-sm">
          <div className="flex p-[8px] text-[#878787] border-[1px] rounded-[10px]">
            <span>#</span>
            <input
              type="text"
              placeholder="태그 입력"
              className="outline-none w-full"
            />
            <button className="shrink-0">등록</button>
          </div>

          <div className="mt-[20px]">
            <p className="font-bold">
              등록한 태그 <span className="text-[#878787]">0/10</span>
            </p>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
