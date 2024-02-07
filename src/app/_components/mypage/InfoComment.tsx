"use client";

import { useState } from "react";
import { BsPencil } from "react-icons/bs";

export default function InfoComment() {
  const [introComment, setIntroComment] = useState("간단한 자기소개입니다.");
  const [introModify, setIntroModify] = useState(true);

  const handleIntroComment = () => {
    setIntroModify(true);
  };

  return (
    <div className="flex items-start mt-[10px]">
      {introModify ? (
        <p className="pl-[6px]">{introComment}</p>
      ) : (
        <input
          type="text"
          value={introComment}
          placeholder="간단한 소개를 입력해주세요."
          className="w-full"
          onChange={(e) => {
            setIntroComment(e.target.value);
          }}
        />
      )}
      {introModify ? (
        <button
          className="shrink-0 bg-[#333] text-[#fff] ml-[6px] py-[2px] px-[4px] rounded-[4px] text-sm flex-center"
          onClick={() => setIntroModify(false)}
        >
          <BsPencil /> 수정
        </button>
      ) : (
        <button
          className="shrink-0 bg-[#333] text-[#fff] ml-[6px] py-[2px] px-[4px] rounded-[4px] text-sm flex-center"
          onClick={handleIntroComment}
        >
          <BsPencil /> 저장
        </button>
      )}
    </div>
  );
}
