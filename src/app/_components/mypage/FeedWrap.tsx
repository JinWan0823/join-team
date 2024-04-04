"use client";
import FeedThumb from "./FeedThumb";
import Nofeed from "./NoFeed";
import { FeedData } from "@/app/_utils/Interface";

interface FeedProps {
  data: FeedData[];
}

export default function FeedWrap({ data }: FeedProps) {
  return data ? (
    <ul className="grid grid-cols-3 gap-1 ">
      {data.map((item, idx) => (
        <FeedThumb key={idx} thumbnail={item.images[0]} />
      ))}
    </ul>
  ) : (
    <Nofeed />
  );
}
