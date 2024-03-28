"use client";
import { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import ClubUploadIMG from "./WriteThumb";
import Category from "./Category";

export default function WriteForm() {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="text-sm">
      <div className="p-[10px]">
        <input
          type="text"
          className="w-full p-[4px] py-[6px] outline-none border-2 border-[#878787] rounded-[4px] focus:border-[#333]"
          placeholder="클럽 이름을 입력해주세요."
        />
        <ClubUploadIMG />
      </div>
      <textarea
        placeholder="클럽에 대해 소개해주세요."
        className="w-full h-[180px] whitespace-pre-wrap resize-none p-[10px] border-y-[1px] outline-none text-sm"
      ></textarea>
      <CategoryBtn
        setCategoryToggle={setCategoryToggle}
        selectedCategory={selectedCategory}
      />
      {categoryToggle && (
        <Category
          setCategoryToggle={setCategoryToggle}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
}
