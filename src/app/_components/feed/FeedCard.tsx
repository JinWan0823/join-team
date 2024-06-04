"use client";
import { GoHeart } from "react-icons/go";
import FeedHeader from "./FeedHeader";
import FeedImg from "./FeedImg";
import FeedText from "./FeedText";
import { FeedData } from "@/app/_utils/Interface";
import { useEffect } from "react";

interface FeedCardProps {
  data: FeedData;
}

export default function FeedCard({ data }: FeedCardProps) {
  const hashTagToArray = data.hashTag.split("\\");

  return (
    <article className="pb-[20px]" id={`${data._id}`}>
      <FeedHeader
        dataId={data._id}
        thumbnail={data.thumbnail}
        name={data.username}
      />
      <FeedImg feedImg={data.images} />
      <FeedText text={data.content} hashTag={hashTagToArray} />
      <div className="p-[10px] flex items-center">
        <button className="mr-[4px]">
          <GoHeart className="text-lg" />
        </button>
        <span>1111</span>
      </div>
    </article>
  );
}
