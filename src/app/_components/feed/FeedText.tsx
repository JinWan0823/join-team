"use client";
import Link from "next/link";
import { useState } from "react";

export default function FeedText() {
  const [unfold, setUnFold] = useState(false);
  return (
    <div className="p-[10px]">
      <div className="hashtag flex">
        <Link href={""} className="mr-[4px] text-[#003783]">
          #모임
        </Link>
        <Link href={""} className="mr-[4px] text-[#003783]">
          #풋살클럽
        </Link>
        <Link href={""} className="mr-[4px] text-[#003783]">
          #정기모임
        </Link>
      </div>
      <div className="mt-[8px]">
        <p
          className={`${
            unfold ? "line-clamp-none" : "line-clamp-2"
          } cursor-pointer break-keep`}
          onClick={() => setUnFold((prev) => !prev)}
        >
          12회 풋살클럽 모임을 좋은 분위기에서 마무리 했습니다. 회원님들 열심히
          뛰시느라 고생 많으셨고 푹 쉬세요! 다음 모임때 뵙겠습니다 :)
        </p>
      </div>
    </div>
  );
}
