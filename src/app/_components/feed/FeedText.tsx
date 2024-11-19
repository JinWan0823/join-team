"use client";
import Link from "next/link";
import { useState } from "react";

interface FeedTextProps {
  text: string;
  hashTag: string[];
}

export default function FeedText({ text, hashTag }: FeedTextProps) {
  const [unfold, setUnFold] = useState(false);
  return (
    <div className="p-[10px]">
      <div className="hashtag flex flex-wrap ">
        {hashTag.map((item, idx) => (
          <Link
            href={`/feed?val=${item}`}
            key={idx}
            className="mr-[4px] text-[#003783]"
          >
            #{item}
          </Link>
        ))}
      </div>
      <div className="mt-[8px]">
        <p
          className={`${
            unfold ? "line-clamp-none" : "line-clamp-2"
          } cursor-pointer break-keep`}
          onClick={() => setUnFold((prev) => !prev)}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
