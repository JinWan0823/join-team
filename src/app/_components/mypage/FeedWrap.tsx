"use client";
import { useEffect, useState } from "react";
import FeedThumb from "./FeedThumb";
import Nofeed from "./NoFeed";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";

export default function FeedWrap() {
  const [data, setData] = useState<FeedData[]>();
  const feed = true;
  const url = `http://localhost:8080/feed`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<FeedData[]>(url);
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Data Fetching Error : ", error);
      }
    };
    fetchData();
  }, []);

  return feed ? (
    <ul className="grid grid-cols-3 gap-1 ">
      {data?.map((item, idx) => (
        <FeedThumb key={idx} thumbnail={item.images[0]} />
      ))}
    </ul>
  ) : (
    <Nofeed />
  );
}
