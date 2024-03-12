"use client";
import FeedCard from "@/app/_components/feed/FeedCard";
import { FeedData } from "@/app/_utils/Interface";
import { getData } from "@/app/_utils/axios";
import { useEffect, useState } from "react";
export default function Wrap() {
  const [data, setData] = useState<FeedData[]>();

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
  return (
    <section className="max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] overflow-y-auto  pb-[56px] scroll-track relative">
      {data?.map((item, idx) => (
        <FeedCard key={idx} data={item} />
      ))}
    </section>
  );
}
