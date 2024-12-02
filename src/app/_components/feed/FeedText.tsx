"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface FeedTextProps {
  text: string;
  hashTag: string[];
}

export default function FeedText({ text, hashTag }: FeedTextProps) {
  const [unfold, setUnFold] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxVisibleHeight = lineHeight * 2; // text 2줄의 높이
      setIsOverflowing(element.scrollHeight > maxVisibleHeight);
    }
  }, [text]);

  return (
    <div className="p-[10px]">
      <div className="hashtag flex flex-wrap">
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
          ref={textRef}
          className={`${
            unfold ? "line-clamp-none" : "line-clamp-2"
          }  break-keep`}
        >
          {text}
        </p>
        {isOverflowing && !unfold && (
          <button
            onClick={() => setUnFold(true)}
            className="mt-[4px] text-sm text-[#003783] underline"
          >
            더보기
          </button>
        )}
        {unfold && (
          <button
            onClick={() => setUnFold(false)}
            className="mt-[4px] text-sm text-[#003783] underline"
          >
            접기
          </button>
        )}
      </div>
    </div>
  );
}
