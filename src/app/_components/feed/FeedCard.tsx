"use client";
import { GoHeart } from "react-icons/go";
import FeedHeader from "./FeedHeader";
import FeedImg from "./FeedImg";
import FeedText from "./FeedText";
import { FeedData } from "@/app/_utils/Interface";
import { Dispatch, SetStateAction, useEffect } from "react";
import LikedBtn from "./LikedBtn";

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
        date={data.date}
      />
      <FeedImg feedImg={data.images} />
      <FeedText text={data.content} hashTag={hashTagToArray} />
      <LikedBtn feedId={data._id} />
    </article>
  );
}
