"use client";

import { putData } from "@/app/_utils/axios";
import { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";

interface CommentProps {
  comment: string;
}

export default function InfoComment({ comment }: CommentProps) {
  const [introComment, setIntroComment] = useState("");
  const [introModify, setIntroModify] = useState(true);

  useEffect(() => {
    setIntroComment(comment);
  }, []);

  const url = "http://localhost:8080/user/comment";

  const handleIntroComment = async () => {
    try {
      const result = await putData(url, {
        introComment: introComment,
      });
      setIntroComment(introComment);
    } catch (error) {
      throw error;
    }
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
